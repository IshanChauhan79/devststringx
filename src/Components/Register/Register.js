import React, { useState } from "react";
import classes from "./Register.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState(null);
  const history = useHistory();

  const urlChanged = (link) => {
    history.push(link);
  };
  const inputChangeHandler = (e, type) => {
    if (type === "name") {
      setName(e.target.value);
    } else if (type === "userName") {
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
          `https://backend.quickstoplab.com/api/registration?name=${name}&username=${userName}&password=${password}`
        )
        .then((res) => {
          setLoading(false);
          history.push("login");
        })
        .catch((error) => {
          setRegisterError(true);
          setLoading(false);
        });
    } catch {
      setRegisterError(true);
      setLoading(false);
    }
  };

  return (
    <div className={classes.Register}>
      <div className={classes.Form}>
        {loading ? (
          <div className={classes.Error}>Loading</div>
        ) : (
          <form onSubmit={(e) => registrationHandler(e)}>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => inputChangeHandler(e, "name")}
              value={name}
              required
            />
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
              value={password}
              required
            />
            {registerError ? (
              <div className={classes.Error}>
                userName and Password incorrect
              </div>
            ) : null}

            <button type="submit">Register</button>
          </form>
        )}

        <div className={classes.Switch} onClick={() => urlChanged("login")}>
          Switch to Login
        </div>
      </div>
    </div>
  );
}

export default Register;
