import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from 'date-fns';
import SecondaryButton from "./SecondaryButton";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/jobads");
        // Access the jobs array from the response object
        setJobs(response.data.jobAds || []); // Adjust this line to match your API response structure

      } catch (error) {
        console.error("Error fetching job listings:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="px-4 mt-40">

      <ul className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array.isArray(jobs) && jobs.length > 0 ? (
          jobs.map((job) => (
            <li key={job.id} className="rounded-md shadow-md p-5 bg-[#E2DBF9]">
              <h3 className="text-md font-semibold capitalize">{job.salaryRange} MAD/ <span className="text-sm">mois</span></h3>
              <h4 className="text-md font-semibold capitalize my-4">{job.title}</h4>
              <h4 className="text-sm uppercase my-2">{job.location}</h4>
              <h4 className="text-sm">{(format(new Date(job.created_at), 'dd MMMM yyyy'))}</h4>
              <button className="w-full mt-4 bg-[#2D2F33] text-white capitalize text-sm py-1 px-4 rounded-sm">
                apply now
              </button>
            </li>
          ))
        ) : (
          <p>No job listings available.</p>
        )}
      </ul>
    </div>
  );
};

export default JobList;
