import React, {Component} from "react";
import Button from "./Button";
import Input from "./Input";

class Form extends Component {
    render() {
        return (
            <form className="signup-form">
                <Input inputType="text" inputPlaceholder="Name" inputIcon="mdi mdi-account-outline"/>
                <Input inputType="email" inputPlaceholder="Email" inputIcon="mdi mdi-email-outline"/>
                <Input inputType="password" inputPlaceholder="Password" inputIcon="mdi mdi-lock-outline"/>
                <Button btnType="btn-signup" btnName="SIGN UP"/>
            </form>
        );
    }
}

export default Form;