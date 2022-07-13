import React, { useState } from "react";
import "./SearchBar.styles.css";

function SearchBar({ setQuery }) {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  function handleQuerySubmit(event) {
    event.preventDefault();

    setQuery(input);
  }

  return (
    <div className="search-bar-body">
      <div className="search-bar-title">Search for questions</div>
      <form onSubmit={handleQuerySubmit}>
        <input
          type="text"
          placeholder="Begin typing..."
          onChange={handleInputChange}
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
