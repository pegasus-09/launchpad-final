import "./Auth.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth-page">
      <div className="auth-left teal">
        <div className="star" />
      </div>

      <div className="auth-right">
        <h1>
          <span className="accent teal-text">Log in</span>
          <br />
          to your account
        </h1>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="outline teal-border teal-text">
          Log in
        </button>

        <p className="switch">
          I don’t have an account{" "}
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
