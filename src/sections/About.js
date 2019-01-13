import React, { Component } from 'react';
import '../App.css';
import Text from '../components/Text';

class About extends Component {

    render(){
        return(
            <div style={{width: window.innerWidth + 'px'}} class='about-container'>
                <Text fontfamily='Montserrat' section='about'/>
                <img style={this.imageStyle} src={this.imageUrl}/>
            </div>
        );
    }

    imageUrl = require(`../images/hussein-headshot.jpg`);
    imageStyle = {
        display: 'flex',
        'align-content': 'left',
        height: window.innerHeight/1.5 + 'px',
        left: window.innerWidth/1.5 + 'px',
        top: window.innerHeight/12 + 'px',
    };
}

export default About;