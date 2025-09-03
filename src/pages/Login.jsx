import React from "react";

const Login = () => {
  return (
    <div className="auth-container login-container">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  );
};

export default Login;
