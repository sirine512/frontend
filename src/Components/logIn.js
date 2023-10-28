import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import("../Style/style.css");

function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/logIn/", {
        name,
        password,
      });

      if (response.status === 200) {
        alert("Login successful!");
      } else {
        alert(`Login failed: ${response.data.message}`);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Login failed");
    }
  };

  return (
    <>
      <div className="login">
        <div className="loginForm">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" id="loginLabel">Username</label> <br />
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="password" id="loginLabel">Password</label><br />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br /><br />
            <p>
              You don't have an account?{" "}
              <Link to={"/signIn"} id="">
                SignIn
              </Link>
            </p>
            <button type="submit" id='logBtn'>LogIn</button>
          </form>
        </div>
        <img src="https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"></img>
      </div>
    </>
  );
}

export default Login;
