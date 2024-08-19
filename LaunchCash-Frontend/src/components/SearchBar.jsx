import React from "react";
import { FaSearch } from "react-icons/fa";
import { Form } from "react-bootstrap";

const SearchBar = ({ query, onQueryChange }) => {
  return (
    <div
      className="search-bar d-flex align-items-center mb-4"
      style={{ margin: "0 auto", maxWidth: "400px" }}
    >
      <FaSearch style={{ marginRight: "10px" }} />
      <Form.Control
        style={{ flex: "1" }}
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
