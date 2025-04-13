import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Search from "../components/Search";
import Job from "../components/Job";

export default function JobListings() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/jobads");
        setJobs(response.data.jobAds || []);
      } catch (error) {
        console.error("Error fetching job listings:", error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    setFilteredJobs(
      jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, jobs]);

  const handleApply = async (jobId) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/apply/${jobId}`, {
        // Include any necessary application data here
      });
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application.");
    }
  };

  return (
    <div className="px-4">
      <Header />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 my-20">
        {Array.isArray(filteredJobs) && filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Job key={job.id} job={job} onApply={handleApply} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No job listings available.
          </p>
        )}
      </div>
    </div>
  );
}
