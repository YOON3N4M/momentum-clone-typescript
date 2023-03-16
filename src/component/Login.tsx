import "../css/Login.css";
import React, { useState, useEffect } from "react";

function Login({ setSavedUsername, setIsLogin }) {
  const [username, setUsername] = useState("");
  const USER_KEY = "user";

  const onSubmit = (event) => {
    event.preventDefault();
    if (username !== "") {
      console.log(username.length);
      console.log("적합한 유저네임 입니다.");
      setSavedUsername(username);
      setIsLogin(true);
      localStorage.setItem(USER_KEY, username);
    } else {
      console.log("유저네임에 적합하지 않습니다");
    }
  };

  function onChange(event) {
    setUsername(event.target.value);
  }

  return (
    <div className="login-modal fadein">
      <span id="login-span">Hello, what's your name?</span>
      <form onSubmit={onSubmit}>
        <input
          id="login-input"
          className="fadein border-bottom-input"
          onChange={onChange}
        ></input>
      </form>
    </div>
  );
}
export default Login;
