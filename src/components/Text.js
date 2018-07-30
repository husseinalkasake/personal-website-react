import React, { Component } from 'react';
import '../App.css';
import textModel from '../models/TextModel';

class Text extends Component{

    getText(){
        var text = [];
        switch(this.props.section){
            case 'about':
                var aboutStyle={
                    'text-align': 'left',
                    'font-size': '14px',
                    width: window.innerWidth/2.2 + 'px',
                    'font-family': this.props.fontfamily
                };
                text.push(<p style={aboutStyle}>{textModel.about[0]}</p>); 
                text.push(<p style={aboutStyle}>{textModel.about[1]}</p>); 
                //text.push(<p style={aboutStyle}>{textModel.about[2]}</p>); 
                text.push(<p style={aboutStyle}>{textModel.about[3]}</p>);      
            default:
                text.push(<p></p>);
                break;
        }
        return text;
    }
    render(){
        var containerStyle = {};
        switch(this.props.section){
            case 'about':
                containerStyle = {
                    'position': 'absolute',
                    top: window.innerHeight/18 + 'px',
                    left: window.innerWidth/7.5 + 'px',
                };
        };
        return(<div style={containerStyle}>{this.getText()}</div>);
    }
}

export default Text;