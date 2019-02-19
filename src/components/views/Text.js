import React, { Component } from 'react';
import getText from '../../models/TextModel';

class Text extends Component{

    render(){
        var styles = {};
        switch(this.props.section){
            case 'about':
                styles  = {
                    'text-align': 'left',
                    'font-size': '14px',
                    width: window.innerWidth/2.2 + 'px',
                    'font-family': this.props.fontfamily
                };
        }
        return(<p style={styles}>{getText(this.props.section)}</p>);
    }
}

export default Text;