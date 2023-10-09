import React from "react";
import "./post-status-filter.css";

const PostStatusFilter = ({ filter, onFilterSelect }) => {
  const buttonsContent = [
    { name: "all", label: "all" },
    { name: "like", label: "liked" },
  ];

  const buttons = buttonsContent.map(({ name, label }) => {
    const active = filter === name,
      clazz = active ? "btn-info" : "btn-outline-secondary";

    return (
      <button
        key={name}
        type="button"
        className={`btn ${clazz}`}
        onClick={() => onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });
  return <div className="btn-group">{buttons}</div>;
};

export default PostStatusFilter;
