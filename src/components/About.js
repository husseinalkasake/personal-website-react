import React, { Component } from 'react';
import '../App.css';

class Text extends Component{

    getText(){
        var text = [];
        switch(this.props.section){
            case 'about':
                text.push('Software Developer and Mechatronics Engineering student at the University of Waterloo.');
            default:
                text.push('');
                break;
        }
        return text;
    }
    render(){
        return(<p style={{'font-family': this.props.fontfamily}}>{this.getText()}</p>);
        }
    }

class About extends Component {

    render(){
        var imageUrl = require(`../images/hussein-headshot.jpg`);
        var styles = {
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: '100%', height: '100%', position: 'absolute'
          };
        return(
            <div style={styles} class='about-container'>
                <Text align='left' fontfamily='Montserrat' section='about'/>
            </div>
        );
    }
}

export default About;
