import React, { Component } from "react";

class Icon extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

        const iconStyle = {
            background: `url(${this.props.urlicon})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // height: `${window.innerHeight}px !important`,
            height: '50px',
            width: '50px',
        }

        return (
            // <a href={this.props.href} target="_blank">
            //     <i className={this.props.icon} style={iconStyle} />
            // </a>

            <image className={this.props.icon} style={iconStyle} />

        );
    }
}

export default Icon;