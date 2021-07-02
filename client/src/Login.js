//import logo from './logo.svg';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Student from "./components/showStudent/showstudent.js";
import Create from "./components/createStudent/createStudent.js";
import useStyles from "./styles";
import "./App.css";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
//import Login from './Components/Login';
import { useHistory } from "react-router-dom";
import { red } from "@material-ui/core/colors";

function Login() {
  const classes = useStyles();
  const [forget, setforgotPassword] = useState({
    userName: "",
    password: "",
  });

  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [error, seterror] = useState("");
  const history = useHistory();
  function Login() {
    axios.post("http://localhost:5000/Auth", user).then((response) => {
      console.log(response);
      if (response.data === null) {
        seterror("Insert Password and username correctly");
      } else {
        if (response.data.role === "student") {
          history.push("/Apply");
        } else {
          if (response.data.role === "admin") {
            history.push("/Admin");
          } else {
            history.push("/TA");
          }
        }
      }
    });
  }

  function Reset() {
    axios.post("http://localhost:5000/Auth/resetp", forget).then((response) => {
      console.log(response);
      if (response.statusText !== "OK" ) {
        seterror("User Not Found!");
      } else {
        
        
      }
    });
  }
  return (
    <div className="App">
      Login Page!
      <span style={{ color: "red" }}>{error}</span>
      <form action="/Schedule">
        <TextField
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          value={user.userName}
          onChange={(event) => {
            setUser({ ...user, userName: event.target.value });
          }}
        />

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={user.password}
          onChange={(event) => {
            setUser({ ...user, password: event.target.value });
          }}
        />

        <Button variant="contained" color="primary" onClick={Login}>
          Login
        </Button>
      </form>
      <form action="/Schedule">
        <TextField
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          value={forget.userName}
          onChange={(event) => {
            setforgotPassword({ ...forget, userName: event.target.value });
          }}
        />

        <TextField
          id="outlined-basic"
          label="NewPassword"
          variant="outlined"
          value={forget.password}
          onChange={(event) => {
            setforgotPassword({ ...forget, password: event.target.value });
          }}
        />

        <Button variant="contained" color="primary" onClick={Reset}>
          Forget Password
        </Button>
      </form>
    </div>
  );
}

export default Login;
