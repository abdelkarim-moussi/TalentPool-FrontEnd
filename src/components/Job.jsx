import { format } from "date-fns";
import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Make sure to install jwt-decode

const Job = ({ job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coverLetter, setCoverLetter] = useState(null);
  const [cv, setCv] = useState(null);
  const [success, setSuccess] = useState("");
  const token = sessionStorage.getItem("token");
  const candidateId = token ? jwtDecode(token).sub : null;

  const handleApply = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("jobad_id", job.id);
    formData.append("candidate_id", candidateId);
    formData.append("coverLetter", coverLetter);
    formData.append("cv", cv);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/applications",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess(response.data.message);

      setCoverLetter(null);
      setCv(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Application submission failed:", error);
      alert("Failed to submit application. Please try again.");
    }
  };

  return (
    <div
      key={job.id}
      className="bg-violet-100 rounded-2xl shadow-lg p-6 transition hover:shadow-xl flex flex-col justify-between"
    >
      {success != "" && (
        <div className="bg-green-400 w-full py-1 text-center">
          <p>{success}</p>
        </div>
      )}
      <div>
        <h3 className="text-lg font-semibold text-violet-900">
          {job.salaryRange} MAD{" "}
          <span className="text-sm font-normal text-gray-700">/ mois</span>
        </h3>
        <h4 className="text-xl font-bold text-gray-900 mt-4">{job.title}</h4>
        <p className="text-sm text-gray-600 uppercase mt-2">{job.location}</p>
        <p className="text-sm text-gray-500 mt-1">
          {job.created_at
            ? format(new Date(job.created_at), "dd MMMM yyyy")
            : ""}
        </p>
      </div>
      <button
        onClick={handleApply}
        className="mt-6 w-full bg-gray-900 text-white text-sm py-2 px-4 rounded-xl hover:bg-gray-800 transition"
      >
        Apply Now
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
            <h2 className="text-lg font-semibold mb-4">
              Apply for {job.title}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Cover Letter (PDF)
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setCoverLetter(e.target.files[0])}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  CV (PDF, DOC, DOCX)
                </label>
                <input
                  type="file"
                  accept=".pdf, .doc, .docx"
                  onChange={(e) => setCv(e.target.files[0])}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 bg-gray-300 text-gray-800 py-2 px-4 rounded-md"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-md"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Job;
