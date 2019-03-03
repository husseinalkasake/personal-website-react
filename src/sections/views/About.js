import React, { Component } from 'react';
import '../styles/About.css';
// import Image from 'react-image-resizer';
import Text from '../../components/views/Text';
import getImage from '../../models/ImageModel';

class About extends Component {

    render(){
        return(
            <div style={{width: window.innerWidth + 'px'}} className='about-container'>
                <Text fontfamily='Montserrat' section='about'/>
                <img className="headshot-img" style={this.imageStyle} src={ getImage('about') }/>
            </div>
        );
    }

    imageStyle = {
        height: window.innerHeight/1.5 + 'px',
        left: window.innerWidth/1.5 + 'px',
        top: window.innerHeight/12 + 'px',
    };
}

export default About;