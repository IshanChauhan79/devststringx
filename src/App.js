import React, { useState } from "react";
import classes from "./App.module.css";
import { Switch, Route } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Toolbar from "./Components/Topbar/Topbar";

function App() {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <div className={classes.App}>
      <Switch>
        <Route path="/" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login setuser={setName} />
        </Route>
        <Route path="/home" exact>
          <Toolbar name={name}/>
        </Route>
        <Route path="/">
          <div> 404</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

// import React from "react";
// import classes from "./Register.module.css";

// function Register() {
//   return (
//     <div className={classes.Register} >
//       register
//     </div>
//   );
// }

// export default Register;
