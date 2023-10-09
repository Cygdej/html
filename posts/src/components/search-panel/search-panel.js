import React, { useState } from "react";
import "./search-panel.css";

const SearchPanel = ({ onUpdateSearch }) => {
  const [term, setTerm] = useState("");

  const onChangeSearch = (e) => {
    const newTerm = e.target.value;
    setTerm(newTerm);
    onUpdateSearch(term);
  };

  return (
    <input
      className="form-control search-input"
      type="text"
      placeholder="search..."
      onChange={onChangeSearch}
    ></input>
  );
};

export default SearchPanel;
