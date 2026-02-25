import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "../components/Navbar";


const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  
  useEffect(() => {
    const savedUser = localStorage.getItem("rememberUser");
    if (savedUser) {
      setUsername(savedUser);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

  
    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (username === "user" && password === "pass123") {
      localStorage.setItem("isAuth", "true");

      if (rememberMe) {
        localStorage.setItem("rememberUser", username);
      } else {
        localStorage.removeItem("rememberUser");
      }

      navigate("/books");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
  <>
    <Navbar showLogout={false} />

    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="remember">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span style={{ marginLeft: "5px" }}>Remember Me</span>
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </>
);
};



export default Login;