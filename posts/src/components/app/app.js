import React, { useState } from "react";
import Posts from "../posts";
import PostAddForm from "../post-add-form";
import LoginForm from "../login-form";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

import User from "../../services/user";

import "./app.css";

const App = () => {
  const [data, onDataChange] = useState([]);
  const [currentUser, onUserChange] = useState(undefined);

  const user = new User();

  const onToggleStatus = (id, status) => {
    onDataChange(() => {
      const index = data.findIndex((elem) => elem.id === id);

      const newItem = { ...data[index], [status]: !data[index][status] };

      const newData = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return newData;
    });
  };

  const deleteItem = (id) => {
    onDataChange(() => {
      const index = data.findIndex((elem) => elem.id === id),
        newData = [...data.slice(0, index), ...data.slice(index + 1)];
      updateDb({ value: newData, key: "data" });
      return newData;
    });
  };

  const updateDb = ({ value, key }) => {
    user.updateValue({ id: currentUser, value: value, key: key });
  };

  const addPost = ({ title, text }, id) => {
    let newData = null;

    const index = data.findIndex((elem) => elem.id === id);

    if (index !== -1) {
      const newPost = { ...data[index], title: title, label: text };

      newData = [...data.slice(0, index), newPost, ...data.slice(index + 1)];
    } else {
      const newPost = {
        title: title,
        label: text,
        important: false,
        like: false,
        id: id,
      };

      newData = [...data, newPost];
    }

    updateDb({ value: newData, key: "data" });
    onDataChange(newData);
  };

  const login = async ({ userInfo, type }) => {
    const {
      userId = "",
      userData,
      error,
    } = type === "login"
      ? await user.login(userInfo)
      : await user.signup(userInfo);

    if (userData) {
      onDataChange(userData);
      onUserChange(userId);
    }

    return error;
  };

  const loginForms = ["login", "signup"].map((path, index) => (
    <Route
      path={path}
      element={<LoginForm type={path} login={login} />}
      key={index}
    />
  ));

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="login" replace={true} />}
          ></Route>
          <Route path="posts" element={<Outlet />}>
            <Route
              path=""
              exact
              element={
                <Posts
                  logged={currentUser}
                  data={data}
                  onDelete={deleteItem}
                  onToggleStatus={onToggleStatus}
                />
              }
            ></Route>
            <Route
              path=":id"
              exact
              element={<PostAddForm data={data} onAdd={addPost} />}
            ></Route>
          </Route>
          {loginForms}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
