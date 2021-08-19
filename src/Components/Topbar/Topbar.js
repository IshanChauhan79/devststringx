import React from "react";
import classes from "./Topbar.module.css";
import { useHistory } from "react-router-dom";

function Topbar(props) {
  const history = useHistory();

  const logoutHandler = () => {
    history.push("/");
  };
  return (
    <div className={classes.Topbar}>
      <div className={classes.TopbarItem}>{props.name}</div>
      <div className={classes.TopbarItem} onClick={logoutHandler}>
        Logout
      </div>
    </div>
  );
}

export default Topbar;
