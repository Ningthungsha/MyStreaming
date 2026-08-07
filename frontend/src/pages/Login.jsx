import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await fetch("http://localhost:5000/api/auth/login", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),

      });

      const data = await res.json();

      if (res.ok) {

        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/");

      } else {

        alert(data.message);

      }

    } catch (error) {

      console.log(error);

      alert("Server Error");

    }

  };

  return (

    <div className="login-page">

      <div className="login-box">

        <h1>
          Roel<span>Stream</span>
        </h1>

        <h2>Welcome Back</h2>

        <p>Login to continue watching your favourite content.</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="login-footer">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </div>

      </div>

    </div>

  );

}

export default Login;