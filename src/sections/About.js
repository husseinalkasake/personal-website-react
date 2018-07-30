import React, { Component } from 'react';
import '../App.css';
import Text from '../components/Text';

class About extends Component {

    render(){
        var imageUrl = require(`../images/hussein-headshot-2.jpg`);
        var imageStyle = {
            height: window.innerHeight/1.5 + 'px',
            left: window.innerWidth/1.5 + 'px',
            top: window.innerHeight/12 + 'px',
            position: 'absolute'
        };
        return(
            <div style={{width: window.innerWidth + 'px'}} class='about-container'>
                <Text fontfamily='Montserrat' section='about'/>
                <img style={imageStyle} src={imageUrl}/>
            </div>
        );
    }
}

export default About;
