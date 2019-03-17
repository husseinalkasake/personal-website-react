import React, { Component } from 'react';
import '../styles/About.css';
import Text from '../../components/views/Text';
import getImage from '../../models/ImageModel';

class About extends Component {

    render(){
        return(
            <div style={this.dynamicSize()} className='about-container'>
                <Text fontfamily='Montserrat' section='about'/>
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