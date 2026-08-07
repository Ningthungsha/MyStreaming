import "../styles/Signup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignup(e) {

    e.preventDefault();

    try {

      const res = await fetch("https://video-s-p.warnode.cloud/api/auth/signup", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username,
          email,
          password,
          role: "creator",
        }),

      });

      const data = await res.json();

      if (!res.ok) {

        if (data.message === "User already exists") {

          setMessage("Account already exists.");

        } else {

          setMessage(data.message);

        }

        return;
      }

      setMessage("Account created successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1000);


    } catch (error) {

      console.log(error);
      setMessage("Server Error. Please try again.");

    }

  }


  return (
    <div className="signup-page">

      <div className="signup-box">

        <h1>
          Roel<span>Stream</span>
        </h1>

        <h2>Create Account</h2>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Full Name"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Sign Up
          </button>

        </form>


        {message && (
          <p className="signup-message">
            {message}

            {message === "Account already exists." && (
              <>
                {" "}
                <span onClick={() => navigate("/login")}>
                  Login
                </span>
              </>
            )}

          </p>
        )}


      </div>

    </div>
  );
}

export default Signup;