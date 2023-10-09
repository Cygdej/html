import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./post-add-form.css";

const PostAddForm = ({ onAdd, data }) => {
  const navigate = useNavigate();

  let { id } = useParams();

  const post = data.find((post) => {
    return post.id === id;
  });

  const [content, onChange] = useState({
    title: post ? post.title : "",
    text: post ? post.label : "",
  });

  const onValueChange = (e) => {
    onChange({ ...content, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(content, id);
    navigate(-1);
  };

  return (
    <form className="form-panel d-flex flex-column" onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Post title"
        className="form-control new-post-title"
        onChange={onValueChange}
        defaultValue={content.title}
      ></input>
      <textarea
        name="text"
        placeholder="Your thoughts"
        className="form-control new-post-text"
        onChange={onValueChange}
        defaultValue={content.text}
      ></textarea>
      <button
        type="submit"
        className="form-panel-btn btn btn-outline-secondary"
      >
        Add post
      </button>
    </form>
  );
};

export default PostAddForm;
