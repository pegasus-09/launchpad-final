import "../styles/Auth.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ExitButton from "../components/ExitButton";

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="auth-page">
            <div className="auth-left teal">
                <div className="star" />
            </div>

            <div className="auth-right">
                <ExitButton position="top-right"/>
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

                <p className="clickable switch" onClick={() => navigate("/signup")}>
                    I already have an account
                </p>
            </div>
        </div>
    );
}
