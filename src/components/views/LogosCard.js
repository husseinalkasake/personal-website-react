import React, { Component } from 'react';
import '../styles/LogosCard.css';

class LogosCard extends Component {

    render(){
        return(
            <div className="logo-container">
                <a target="_blank" href='https://www.linkedin.com/in/hussein-alkasake/'>
                    <img src={require('../../images/linkedin-logo.png')}/>
                </a>
                <a target="_blank" href='https://github.com/husseinalkasake'>
                    <img src={require('../../images/github-logo.png')}/>
                </a>
                <a target="_blank" href='https://drive.google.com/file/d/1cjHPtcBU532lX8RXLQFbmXzW0fKWQ8NE/view'>
                    <img src={require('../../images/cv-icon.png')}/>
                </a>
            </div>
        );
    }
}

export default LogosCard;

