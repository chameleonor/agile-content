import React, { Component } from "react";

class Icon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            backgroundImage: `url('${this.props.urlicon}')`
        }

        return (
            <div className="general-icon" style={style}>{this.props.children}</div>
        );
    }
}

export default Icon;