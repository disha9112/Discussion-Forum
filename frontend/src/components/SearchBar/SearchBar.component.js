import React, { useState } from "react";
import "./SearchBar.styles.css";

function SearchBar() {
  const [query, setQuery] = useState("");
  return (
    <div className="search-bar-body">
      <div className="search-bar-title">Search for questions</div>
      <form>
        <input
          type="text"
          placeholder="Begin typing..."
          required
          value={query}
          // onChange={handleQueryChange}
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
