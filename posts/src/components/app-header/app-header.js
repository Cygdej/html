import React from "react";
import "./app-header.css";

const AppHeader = ({ liked, allPosts, name }) => {
  return (
    <div className="app-header d-flex">
      <h1>{name}</h1>
      <h2>
        {allPosts} posts, liked {liked}
      </h2>
    </div>
  );
};

export default AppHeader;
