import React, { Component } from 'react';
import '../App.css';

class Home extends Component {

    render(){
        var homeStyle = {
            'background-size': 'cover',
            'background-position': 'center',
            justifyContent: 'center',
            display: 'flex',
            width: window.innerWidth + 'px', 
            height: window.innerHeight + 'px'
        };
        var containerStyle = {
            justifyContent: 'center',
            position: 'absolute',
            //height: window.innerHeight/4 + 'px',
            top: window.innerHeight/4 + 'px',
        };
        var logosStyle = {
            //padding: '5%', 
            display: 'inline-block',
            //width: window.innerWidth + 'px',
            bottom: window.innerHeight + 'px',
        };
        return(
            <div className='home-container' style={homeStyle}>
            <div className='cover-layer' style={{justifyContent: 'center'}}>
                    <div style={containerStyle}>
                    <p>Software Developer</p>
                    <p>MECHATRONICS ENGINEERING</p>
                    <div style={logosStyle}>
                    <a target="_blank" href='https://www.linkedin.com/in/hussein-alkasake/'><img style={{height: '4%', width: '4%'}} src={require('../images/linkedin-logo.png')}/></a>
                    <a target="_blank" href='https://github.com/husseinalkasake'><img style={{height: '4%', width: '4%'}} src={require('../images/github-logo.png')}/></a>
                    <a target="_blank" href='https://drive.google.com/file/d/1cjHPtcBU532lX8RXLQFbmXzW0fKWQ8NE/view'><img style={{height: '4%', width: '4%'}} src={require('../images/cv-icon.png')}/></a>
                    </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default Home;

