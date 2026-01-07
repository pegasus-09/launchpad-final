import "../styles/Auth.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ExitButton from "../components/ExitButton.jsx";


export default function Signup() {
    const navigate = useNavigate();

    return (
        <div className="auth-page reverse">
            <div className="auth-left purple">
                <div className="star" />
            </div>

            <div className="auth-right">
                <ExitButton position="top-left"/>
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
                <p className="clickable switch" onClick={() => navigate("/login")}>
                    I already have an account
                </p>
            </div>
        </div>
    );
}
