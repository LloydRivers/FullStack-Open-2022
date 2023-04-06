import React, { useState } from "react";
import { login } from "../utils/loginService";
import PropTypes from "prop-types";

const Login = ({
  setUser,
  set_User_Alert_Message,
  setLoginVisible,
  loginVisible,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const hideWhenVisible = { display: loginVisible ? "none" : "" };
  const showWhenVisible = { display: loginVisible ? "" : "none" };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (username === "" || password === "") {
      set_User_Alert_Message("error: username or password is empty");
      setTimeout(() => {
        set_User_Alert_Message(null);
      }, 5000);
    } else {
      try {
        const { data } = await login({
          username,
          password,
        });

        window.localStorage.setItem("logged_in_user", JSON.stringify(data));
        setUsername("");
        setPassword("");
        setUser(data);
        set_User_Alert_Message("success: " + username);
        setTimeout(() => {
          set_User_Alert_Message(null);
        }, 5000);
      } catch (error) {
        set_User_Alert_Message("error: " + error.response.data.error);

        console.log("error: " + error.response.data.error);

        setTimeout(() => {
          set_User_Alert_Message(null);
          setUsername("");
          setPassword("");
        }, 5000);
      }
    }
  };
  return (
    <>
      <div style={hideWhenVisible}>
        <button id="proceed_to_login" onClick={() => setLoginVisible(true)}>
          proceed to login
        </button>
      </div>
      <form style={showWhenVisible} onSubmit={handleLogin}>
        <div>
          username
          <input
            type="text"
            id="username"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            id="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button id="login-button" type="submit">
          login
        </button>
        <button type="button" onClick={() => setLoginVisible(false)}>
          cancel
        </button>
      </form>
    </>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
  set_User_Alert_Message: PropTypes.func.isRequired,
  setLoginVisible: PropTypes.func.isRequired,
  loginVisible: PropTypes.bool.isRequired,
};

export default Login;
