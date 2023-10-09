import React from "react";
import "./post-list-item.css";
import { useNavigate } from "react-router-dom";

const PostlistItem = ({
  title,
  label,
  onDelete,
  onToggleStatus,
  important,
  like,
  id,
}) => {
  const navigate = useNavigate();

  function openPost() {
    navigate(`/posts/${id}`);
  }

  let classes = "app-list-item d-flex justify-content-between";

  if (important) {
    classes += " important";
  }

  if (like) {
    classes += " like";
  }

  return (
    <div className={classes}>
      <div className="app-list-item-content">
        <h3 className="app-list-item-title">{title}</h3>
        <p className="app-list-item-label">{label}</p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn-star btn-sm"
          onClick={() => {
            onToggleStatus("important");
          }}
        >
          <i className="bi bi-star"></i>
        </button>
        <button
          className="btn-heart btn-sm"
          onClick={() => {
            onToggleStatus("like");
          }}
        >
          <i className="bi bi-suit-heart-fill"></i>
        </button>
        <button className="btn-edit btn-sm" onClick={openPost}>
          <i className="bi bi-pen"></i>
        </button>
        <button className="btn-trash btn-sm" onClick={onDelete}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default PostlistItem;
