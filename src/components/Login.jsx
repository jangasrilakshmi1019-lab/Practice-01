import React, { useState } from "react";
import { Mail, Lock, EyeOff, Eye } from "lucide-react";
import "./Login.css";
import loginImage from "../assets/login.png";
import logo from "../assets/image.png";

const Login = () => {
const [showPassword, setShowPassword] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

//handle form submission
const handleSubmit = (e) => {
e.preventDefault();
if (!email || !password) {
alert("⚠️ Please enter Email and Password");
return;
}
//login popup 
alert("✅ Login Successful!");
console.log({
    email,
    password,
});
};

return (
    <div className="login-page">
<div className="login-left">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>

        <img
        src={loginImage}
        alt="Login"
        className="login-image"
        />
    </div>
    <div className="login-right">
        <div className="logo-container">
        <img
            src={logo}
            alt="Logo"
            className="logo"
        />
        </div>
        <h1>Welcome Back</h1>
        <p>Login to your account</p>
        {message && (
        <div className="notification">
            {message}
        </div>
    )}
<form onSubmit={handleSubmit}>
    <div className="input-box">
        <Mail className="icon" />
        <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
            setEmail(e.target.value)
            }
        />
    </div>
    <div className="input-box">
            <Lock className="icon" />
            <input
            type={
                showPassword
                ? "text"
                : "password"
            }
            placeholder="Password"
            value={password}
            onChange={(e) =>
                setPassword(e.target.value)
            }
            />
    <button
        type="button"
        className="eye-btn"
        onClick={() =>
        setShowPassword(
        !showPassword
        )
        }
    >
    {showPassword ? (
    <Eye />
    ) : (
    <EyeOff />
    )}
    </button>
</div>
    <div className="login-options">
    <label><input type="checkbox" /> Remember Me</label>
    <a href="#"> Forgot Password?</a>
    </div>
    <button type="submit" className="login-btn">Login</button>
</form>
    </div>
    </div>
);
};
export default Login;