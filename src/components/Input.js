import React, {Component} from "react";

class Input extends Component {
    render() {
        let icon = (this.props.inputIcon) ? (<i className={this.props.inputIcon}/>) : (<></>);
        return (
            <div className="input-group">
                {icon}
                <input className="form-control" type={this.props.inputType} placeholder={this.props.inputPlaceholder}/>
            </div>
        );
    }
}

export default Input;