import React, {Component} from "react";
import logo from '../img/logo.svg'


class Logo extends Component {

    render() {
        return (
            <div className="logo-container">
                <img className="logo" src={logo} width="30" alt="logo"/>
                <span>Diprella</span>
            </div>
        );
    }
}
export default Logo;