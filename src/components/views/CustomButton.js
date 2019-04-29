import React, { Component } from 'react';
import '../styles/CustomButton.css';

class CustomButton extends Component {
    render() {
        return(
        <div className="custom-button" onClick={e=> {e.stopPropagation(); this.props.onClick()}}>
            { this.props.text }
        </div>
        );
    }
};
export default CustomButton;