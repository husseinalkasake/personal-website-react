import React, { Component } from 'react';

class LogosCard extends Component {

    render(){
        var logosStyle = {
            bottom: window.innerHeight + 'px',
        };
        return(
            <div className="logo-container" style={logosStyle}>
                <a target="_blank" href='https://www.linkedin.com/in/hussein-alkasake/'>
                    <img style={{height: '4%', width: '4%'}} src={require('../../images/linkedin-logo.png')}/>
                </a>
                <a target="_blank" href='https://github.com/husseinalkasake'>
                    <img style={{height: '4%', width: '4%'}} src={require('../../images/github-logo.png')}/>
                </a>
                <a target="_blank" href='https://drive.google.com/file/d/1cjHPtcBU532lX8RXLQFbmXzW0fKWQ8NE/view'>
                    <img style={{height: '4%', width: '4%'}} src={require('../../images/cv-icon.png')}/>
                </a>
            </div>
        );
    }
}

export default LogosCard;

