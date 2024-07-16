
import React, { useState } from 'react';

const Home = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    onSubmit(searchQuery);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <div className="searchbox--total">
      <input
        className="searchbar"
        placeholder="Enter Ingredients from your Fridge"
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
      />
      <button className="search-button" onClick={handleSearchSubmit}>Search</button>
    </div>
  );
};

export default Home;
