import React, { Component } from 'react';
import '../App.css';

class Home extends Component {

    render(){
        var imageUrl = require(`../images/hussein-wideshot-cropped.jpg`);
        var styles = {
            backgroundImage: `url(${imageUrl})`,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: '100%', height: '100%', position: 'absolute'
          };
        return(
            <div className='home-container' style={styles}>
                    <p>Software Developer</p>
                    <p>Mechatronics Engineering</p>
                    <div style={{padding: '5%', display: 'inline-block'}}>
                    <a target="_blank" href='https://www.linkedin.com/in/hussein-alkasake/'><img style={{height: '4%', width: '4%'}} src={require('../images/linkedin-logo.png')}/></a>
                    <a target="_blank" href='https://github.com/husseinalkasake'><img style={{height: '4%', width: '4%'}} src={require('../images/github-logo.png')}/></a>
                    <a target="_blank" href='https://drive.google.com/file/d/1cjHPtcBU532lX8RXLQFbmXzW0fKWQ8NE/view'><img style={{height: '4%', width: '4%'}} src={require('../images/cv-icon.png')}/></a>
                    </div>
            </div>
        );
    }
}

export default Home;

