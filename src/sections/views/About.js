import React, { Component } from 'react';
import '../styles/About.css';
import Text from '../../components/views/Text';

class About extends Component {

    render(){
        return(
            <div style={{width: window.innerWidth + 'px'}} className='about-container'>
                <Text fontfamily='Montserrat' section='about'/>
                <img className="headshot-img" style={this.imageStyle} src={this.imageUrl}/>
            </div>
        );
    }

    imageUrl = require(`../../images/hussein-headshot.jpg`);
    imageStyle = {
        height: window.innerHeight/1.5 + 'px',
        left: window.innerWidth/1.5 + 'px',
        top: window.innerHeight/12 + 'px',
    };
}

export default About;