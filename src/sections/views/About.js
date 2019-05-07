import React, { Component } from 'react';
import '../styles/About.css';
import Text from '../../components/views/Text';
import getImage from '../../models/ImageModel';

class About extends Component {

    render(){
        return(
            <div style={this.dynamicSize()} className='about-container'>
                <div>
                    <Text fontfamily='Montserrat' section='about'/>
                    <div className="about-logo-container">
                        <a target="_blank" href='https://www.linkedin.com/in/hussein-alkasake/'>
                            <img src={require('../../images/linkedin-logo-white.png')}/>
                        </a>
                        <a target="_blank" href='https://github.com/husseinalkasake'>
                            <img src={require('../../images/github-logo-white.png')}/>
                        </a>
                        <a target="_blank" href='https://drive.google.com/file/d/1cjHPtcBU532lX8RXLQFbmXzW0fKWQ8NE/view'>
                            <img src={require('../../images/cv-icon-white.png')}/>
                        </a>
                    </div>
                </div>
                <img src={ getImage('about')} height={this.dynamicImageHeight()} width={this.dynamicImageWidth()}/>
            </div>
        );
    }
    dynamicSize () {
        return { flexDirection: (window.innerWidth <= 640 ? 'column-reverse' : 'row') };
    }
    dynamicImageHeight () {
        return window.innerHeight / 1.5;
    }
    dynamicImageWidth () {
        return window.innerHeight / 2;
    }
}

export default About;