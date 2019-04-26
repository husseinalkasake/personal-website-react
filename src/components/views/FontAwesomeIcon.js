import React, { Component } from 'react';
const FontAwesome = require('react-fontawesome');

class FontAwesomeIcon extends Component {
    render() {
        return(
            <FontAwesome
                className={this.props.className}
                name={this.props.name}
                size={this.props.size}
                spin={this.props.spin}
                style={this.props.style}
                onClick={this.props.onClick} />
        );
    }
};
export default FontAwesomeIcon;