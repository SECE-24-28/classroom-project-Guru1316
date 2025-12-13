import { useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate= useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) 
    {
      localStorage.setItem("auth", true)
      console.log(email, password);
      alert("Login Successful!");
      navigate("/home");
    }
    else 
    {
      alert("Invalid Email or Password, or User not registered.");
    }
  }
  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Login Page</h2>
        <label>Email</label>
        <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" required></input>
        <label>Password</label>
        <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" required></input>
        <button className="loginButton" type="submit">
          Login
        </button>
        <Link to={'/register'} className="register">Don't Have An Account? Register</Link>
      </form>
    </div>
  );
};

export default Login;