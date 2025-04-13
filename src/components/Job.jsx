import { format } from "date-fns";
import React from "react";

const Job = ({ job, onApply }) => {
  const handleApply = () => {
    if (onApply) {
      onApply(job.id); // Call the onApply function with the job ID
    }
  };

  return (
    <div
      key={job.id}
      className="bg-violet-100 rounded-2xl shadow-lg p-6 transition hover:shadow-xl flex flex-col justify-between"
    >
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
    </div>
  );
};

export default Job;
