import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Posts = ({ data, onDelete, onToggleStatus, logged }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      navigate("/");
    }
  });

  const [prop, changeFilter] = useState({
    term: "",
    filter: "all",
  });

  const searchPost = function (items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return (
        item.label.toLowerCase().indexOf(term) > -1 ||
        item.title.toLowerCase().indexOf(term) > -1
      );
    });
  };

  const onUpdateSearch = (term) => {
    changeFilter({ term: term });
  };

  const filterPost = function (items, filter) {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  };

  const newPost = function () {
    navigate(`/posts/${uuidv4()}`);
  };

  const onFilterSelect = (filter) => {
    changeFilter({ ...prop, filter: filter });
  };

  const { term, filter } = prop;

  const visiblePosts = filterPost(searchPost(data, term), filter);

  const liked = data.filter((item) => item.like).length,
    allPosts = data.length;

  return (
    <>
      <AppHeader name={logged} liked={liked} allPosts={allPosts} />
      <div className="search-panel d-flex">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <PostStatusFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>
      <PostList
        posts={visiblePosts}
        onDelete={onDelete}
        onToggleStatus={onToggleStatus}
      />
      <button className="btn btn-info" onClick={newPost}>
        Add post
      </button>
    </>
  );
};

export default Posts;
