import React, {Component} from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

class LoginPage extends Component {

    render() {
        return (
            <main className="container">
                <SignIn/>
                <SignUp/>
            </main>
        );
    }
}

export default LoginPage;