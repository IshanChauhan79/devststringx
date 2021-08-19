import React, { useState } from "react";
import classes from "./Login.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useHistory();

  const urlChanged = (link) => {
    history.push(link);
  };
  const inputChangeHandler = (e, type) => {
    if (type === "userName") {
      setuserName(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  const registrationHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      axios
        .post(
          `https://backend.quickstoplab.com/api/login?username=${userName}&password=${password}&userType=user`
        )
        .then((res) => {
          setLoading(false);
          props.setuser(userName);
          history.push("home");
        })
        .catch((error) => {
          setLoginError(true);
          setLoading(false);
        });
    } catch {
      setLoginError(true);
      setLoading(false);
    }
  };

  return (
    <div className={classes.Login}>
      <div className={classes.Form}>
        {loading ? (
          <div className={classes.Error}>Loading</div>
        ) : (
          <form onSubmit={(e) => registrationHandler(e)}>
            <input
              type="text"
              placeholder="UserName"
              onChange={(e) => inputChangeHandler(e, "userName")}
              value={userName}
              required
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => inputChangeHandler(e, "password")}
              required
              value={password}
            />
            {loginError ? (
              <div className={classes.Error}>
                userName and Password incorrect
              </div>
            ) : null}
            <button type="submit">Login</button>
          </form>
        )}

        <div className={classes.Switch} onClick={() => urlChanged("/")}>
          Switch to Register
        </div>
      </div>
    </div>
  );
}

export default Login;
