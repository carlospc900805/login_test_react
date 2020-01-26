import React, {Component} from "react";
import Logo from "./Logo";
import Button from "./Button";

class SignIn extends Component {
    render() {
        return (
            <div className="signin">
                <Logo/>
                <div className="signin-content">
                    <h1 className="welcome-title">Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <Button btnType="btn-signin" btnName="Sign In"/>
                </div>
            </div>
        );
    }
}
export default SignIn;