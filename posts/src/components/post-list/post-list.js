import React from "react";
import PostlistItem from "../post-list-item";
import "./post-list.css";

const Postlist = ({ posts, onDelete, onToggleStatus }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <PostlistItem
          id={id}
          {...itemProps}
          onDelete={() => {
            onDelete(id);
          }}
          onToggleStatus={(status) => onToggleStatus(id, status)}
        />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default Postlist;
