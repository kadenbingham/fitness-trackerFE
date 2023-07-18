import React, { useState } from "react";
const url = "http://fitnesstrac-kr.herokuapp.com/api/";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${url}users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const result = await response.json();
      setToken(result.token);
      console.log("Token: ", result.token);
      sessionStorage.setItem("AUTH_TOKEN", result.token);
      sessionStorage.setItem("USERNAME", username);
      console.log("results: ", result);
    } catch (err) {
      console.error(err);
    }
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Token: ", token);

    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
