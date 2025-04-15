import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function RecruiterDashboard() {
  const [jobAds, setJobAds] = useState([]);
  const [jobStats, setJobStats] = useState([]);
  const [appStats, setAppStats] = useState([]);

  const [newJob, setNewJob] = useState({
    title: "",
    description: "",
    salaryRange: "",
    location: "",
  });

  const [editMode, setEditMode] = useState(null);

  const [expandedJobId, setExpandedJobId] = useState(null);
  const [applications, setApplications] = useState({});

  const token = sessionStorage.getItem("token");

  const decoded = jwtDecode(sessionStorage.getItem("token"));

  const recruiterId = decoded["sub"];

  useEffect(() => {
    fetchJobAds();
  }, [jobAds]);

  const fetchJobAds = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/jobads", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setJobAds(response.data.jobAds || []);
    } catch (error) {
      console.error("Failed to fetch job ads:", error);
    }
  };

  const handleChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editMode
      ? `http://127.0.0.1:8000/api/jobads/${editMode}`
      : "http://127.0.0.1:8000/api/jobads";

    const method = editMode ? "put" : "post";
    const jobData = editMode
      ? newJob
      : { ...newJob, recruiter_id: recruiterId };

    try {
      await axios[method](url, jobData, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      setNewJob({ title: "", description: "", salaryRange: "", location: "" });
      setEditMode(null);
      fetchJobAds();
    } catch (error) {
      console.error("Error saving job ad:", error);
    }
  };

  const handleEdit = (job) => {
    setNewJob(job);
    setEditMode(job.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job ad?")) return;
    try {
      await axios.delete(`http://127.0.0.1:8000/api/jobads/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchJobAds();
    } catch (error) {
      console.error("Failed to delete job ad:", error);
    }
  };

  const fetchApplications = async (jobadId) => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/applications?jobad_id=${jobadId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setApplications((prev) => ({
        ...prev,
        [jobadId]: res.data.applications,
      }));
    } catch (err) {
      console.error("Failed to fetch applications:", err);
    }
  };

  const updateApplicationStatus = async (appId, newStatus, jobadId) => {
    try {
      await axios.patch(
        `http://127.0.0.1:8000/api/applications/updatestatus/${appId}?status=${newStatus}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchApplications(jobadId); // Refresh apps
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  const fetchStats = async () => {
    try {
      const [jobRes, appRes] = await Promise.all([
        axios.get("http://127.0.0.1:8000/api/statistics/jobads_statistics", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(
          "http://127.0.0.1:8000/api/statistics/applications_statistics",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        ),
      ]);
      setJobStats(jobRes.data || {});
      setAppStats(appRes.data || {});
    } catch (err) {
      console.error("Error fetching statistics:", err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Recruiter Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-3">📢 Job Ads Statistics</h3>
          <p>
            <strong>Total:</strong> {jobStats.total_jobAds || 0}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold mb-3">
            📨 Applications Statistics
          </h3>
          <p>
            <strong>Total:</strong> {appStats.total || 0}
          </p>
          <p>
            <strong>Received:</strong> {appStats.pending_applications || 0}
          </p>
          <p>
            <strong>Accepted:</strong> {appStats.accepted || 0}
          </p>
          <p>
            <strong>In Interview:</strong> {appStats.in_interview || 0}
          </p>
          <p>
            <strong>Refused:</strong> {appStats.refused || 0}
          </p>
          <p>
            <strong>Done:</strong> {appStats.done || 0}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          name="title"
          value={newJob.title}
          onChange={handleChange}
          placeholder="Job Title"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          value={newJob.description}
          onChange={handleChange}
          placeholder="Job Description"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="salaryRange"
          value={newJob.salaryRange}
          onChange={handleChange}
          placeholder="Salary Range"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="location"
          value={newJob.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          {editMode ? "Update Job Ad" : "Create Job Ad"}
        </button>
        {editMode && (
          <button
            type="button"
            onClick={() => {
              setEditMode(null);
              setNewJob({
                title: "",
                description: "",
                salaryRange: "",
                location: "",
              });
            }}
            className="ml-2 text-sm text-gray-500 underline"
          >
            Cancel Edit
          </button>
        )}
      </form>

      <div className="space-y-6">
        {jobAds.map((job) => (
          <div
            key={job.id}
            className="p-4 border rounded shadow flex flex-col gap-2"
          >
            <div>
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p>{job.description}</p>
              <p>
                <strong>Salary:</strong> {job.salaryRange}
              </p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
            </div>
            <div className="flex gap-3 mt-2">
              <button
                onClick={() => handleEdit(job)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(job.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

              <button
                onClick={() => {
                  if (expandedJobId === job.id) {
                    setExpandedJobId(null);
                  } else {
                    fetchApplications(job.id);
                    setExpandedJobId(job.id);
                  }
                }}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                {expandedJobId === job.id
                  ? "Hide Applications"
                  : "View Applications"}
              </button>
            </div>
            {expandedJobId === job.id && (
              <div className="bg-gray-100 p-4 mt-2 rounded">
                <h4 className="font-semibold mb-2">Applications</h4>
                {applications[job.id]?.length > 0 ? (
                  applications[job.id].map((app) => (
                    <div
                      key={app.id}
                      className="border p-3 mb-2 rounded bg-white"
                    >
                      <p>
                        <strong>Candidate:</strong>{" "}
                        {app.candidate_name || "ID " + app.candidate_id}
                      </p>
                      <p>
                        <strong>Status:</strong> {app.status}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <label htmlFor={`status-${app.id}`}>
                          Change Status:
                        </label>
                        <select
                          id={`status-${app.id}`}
                          defaultValue={app.status}
                          onChange={(e) =>
                            updateApplicationStatus(
                              app.id,
                              e.target.value,
                              job.id
                            )
                          }
                          className="border p-1 rounded"
                        >
                          <option value="received">Received</option>
                          <option value="accepted">Accepted</option>
                          <option value="refused">Refused</option>
                          <option value="in_interview">In Interview</option>
                          <option value="done">Done</option>
                        </select>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No applications yet.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
