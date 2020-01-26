import React, {Component} from "react";
import Button from "./Button";
import Form from "./Form";

class SignUp extends Component {

    render() {
        return (
            <div className="signup">
                <div className="signup-wrapper">
                    <h1 className="create-title">Create Account</h1>
                    <div className="social-buttons">
                        <Button btnType="btn-social" btnIcon="facebook"/>
                        <Button btnType="btn-social" btnIcon="google-plus"/>
                        <Button btnType="btn-social" btnIcon="linkedin"/>
                    </div>
                    <p>or use your email for registration:</p>
                    <Form/>
                </div>
            </div>
        );
    }
}

export default SignUp;