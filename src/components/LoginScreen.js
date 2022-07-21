import React from "react";
import './LoginScreen.css';
import Logo from './assets/Logo.png';
import SignupScreen from "./SignupScreen";

function LoginScreen() {
    return (
        <div className="LoginScreen">
            <div className="login_background">
                <div />
                <img src={Logo} alt="Logo" />                
                <div />
                <div>
                <SignupScreen />
                </div>
            </div>
        </div>
    )
}

export default LoginScreen;