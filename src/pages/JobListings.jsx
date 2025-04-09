const JobListings = () => {
  return (
    <div className="px-4 mt-40">

      <ul className="grid grid-cols-3 gap-5">
        {Array.isArray(jobs) && jobs.length > 0 ? (
          jobs.map((job) => (
            <li key={job.id} className="rounded-md shadow-md px-5 py-2">
              <h3 className="text-md font-semibold capitalize">{job.title}</h3>
              <p>{job.description}</p>
              <p>ID: {job.id}</p> 
            </li>
          ))
        ) : (
          <p>No job listings available.</p>
        )}
      </ul>
    </div>
  )
}

export default JobListings
