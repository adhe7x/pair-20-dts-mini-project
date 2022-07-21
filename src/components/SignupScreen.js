import React from "react";
import './SignupScreen.css';

function SignupScreen() {



    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email" />
                <input placeholder="Password" type="password" />
                <button type="submit">Sign In</button>
                <h4>
                    <span className="akun__grey">Belum punya akun? </span>
                    <span className="signup__link">Sign Up</span>
                </h4>
            </form>
        </div>
    )
}

export default SignupScreen;