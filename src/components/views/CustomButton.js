import React, { Component } from 'react';
import '../styles/CustomButton.css';

class CustomButton extends Component {
    render() {
        return(
        <div className="custom-button" onClick={(e) => this.handleClick(e)}>
            { this.props.text }
        </div>
        );
    }

    handleClick (e) {
        e.stopPropagation();
        if (this.props.onClick) {
            this.props.onClick();
        }
    }
};
export default CustomButton;