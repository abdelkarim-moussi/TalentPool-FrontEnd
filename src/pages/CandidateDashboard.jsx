import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function CandidateDashboard() {
  const [applications, setApplications] = useState([]);
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  const decoded = jwtDecode(sessionStorage.getItem("token"));

  const candidateId = decoded["sub"];

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/applications?candidate_id=${candidateId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setApplications(res.data.applications || []);
    } catch (err) {
      console.error("Failed to fetch applications:", err);
    }
  };

  const handleWithdraw = async (appId) => {
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/applications/withdraw/${appId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchApplications();
    } catch (err) {
      console.error("Withdraw failed:", err);
    }
  };

  const handleDelete = async (appId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this application?"
    );
    if (!confirm) return;
    try {
      await axios.delete(`http://127.0.0.1:8000/api/applications/${appId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchApplications();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">My Applications</h2>
      {applications.length === 0 ? (
        <p>No applications submitted yet.</p>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => (
            <div key={app.id} className="p-4 border rounded shadow bg-white">
              <p>
                <strong>Job Title:</strong> {app.job_title || "N/A"}
              </p>
              <p>
                <strong>Status:</strong> {app.status}
              </p>
              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => handleWithdraw(app.id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Withdraw
                </button>
                <button
                  onClick={() => handleDelete(app.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
