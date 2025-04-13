import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search for jobs..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border rounded p-2 w-full max-w-[400px] mb-4"
    />
  );
};

export default Search;
