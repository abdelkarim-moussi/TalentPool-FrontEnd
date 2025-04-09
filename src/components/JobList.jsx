import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import SecondaryButton from "./SecondaryButton";
import Header from "./Header";
import Search from "./Search";

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
    <div className="px-4">
      <Header></Header>
      <Search />
      <ul className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 my-20">
        {Array.isArray(jobs) && jobs.length > 0 ? (
          jobs.map((job) => (
            <li
              key={job.id}
              className="bg-violet-100 rounded-2xl shadow-lg p-6 transition hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-violet-900">
                  {job.salaryRange} MAD{" "}
                  <span className="text-sm font-normal text-gray-700">
                    / mois
                  </span>
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mt-4">
                  {job.title}
                </h4>
                <p className="text-sm text-gray-600 uppercase mt-2">
                  {job.location}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {job.created_at
                    ? format(new Date(job.created_at), "dd MMMM yyyy")
                    : ""}
                </p>
              </div>
              <button className="mt-6 w-full bg-gray-900 text-white text-sm py-2 px-4 rounded-xl hover:bg-gray-800 transition">
                Apply Now
              </button>
            </li>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No job listings available.
          </p>
        )}
      </ul>
    </div>
  );
};

export default JobList;
