import React from "react";

const Search = ({ handleSearch, search }) => {
  return (
    <div>
      <label htmlFor="search">Filter:</label>
      <input id="search" value={search} onChange={handleSearch} />
    </div>
  );
};

export default Search;
