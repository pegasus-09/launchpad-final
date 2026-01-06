import "./Auth.css";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="auth-page reverse">
      <div className="auth-left purple">
        <div className="star" />
      </div>

      <div className="auth-right">
        <h1>
          <span className="accent purple-text">Sign up</span>
          <br />
          for an account
        </h1>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="primary purple">
          Sign up
        </button>

        <p className="switch">
          I already have an account{" "}
          <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}
