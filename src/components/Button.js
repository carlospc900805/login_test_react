import React, {Component} from "react";

class Button extends Component {
    render() {
        let name = (this.props.btnIcon) ? (<i className={`fa fa-${this.props.btnIcon}`}/>) : (<>{this.props.btnName}</>);

        return (
            <button className={`btn ${this.props.btnType}`}>{name}</button>
        );
    }
}

export default Button;