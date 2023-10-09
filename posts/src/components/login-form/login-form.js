import "./login-form.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = ({ type, login }) => {
  const [userInfo, onChange] = useState({
    id: "",
    password: "",
  });

  const [error, onInvalid] = useState(undefined);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    onChange({ ...userInfo, [e.target.name]: e.target.value });
    onInvalid(undefined);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const invalid = await login({ userInfo: userInfo, type: type });

    if (!invalid) {
      onChange({ id: "", password: "" });
      navigate("/posts");
    } else {
      onInvalid(invalid);
    }
  };

  const OnLinkClick = () => {
    onInvalid(undefined);
  };

  const inputClasses = "login__input";

  const content = {
    title: type === "login" ? "Login" : "Sign Up",
    text: type === "login" ? "Dont have account?" : "Already have account?",
    inputClass: error ? inputClasses + " login__input--error" : inputClasses,
    linkText: type === "login" ? "Sign Up" : "Login",
    linkTo: type === "login" ? "/signup" : "/login",
    errorLabel: error ? <span className="login__error">{error}</span> : null,
  };

  const { title, text, linkTo, inputClass, linkText, errorLabel } = content;

  return (
    <div className="login">
      <h2 className="login__title">{title}</h2>
      <form onSubmit={onSubmit} className="login__form">
        <input
          name="id"
          type="text"
          className={inputClass}
          placeholder="name"
          onChange={onValueChange}
        ></input>
        {errorLabel}
        <input
          name="password"
          type="password"
          className={inputClass}
          placeholder="Password"
          onChange={onValueChange}
        ></input>
        <button type="submit" className="btn btn-info login__btn">
          Submit
        </button>
      </form>
      <p className="login__text">
        {text}{" "}
        <Link to={linkTo} className="login__link" onClick={OnLinkClick}>
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
