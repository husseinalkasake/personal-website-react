import React, { Component } from 'react';
import '../../styles/App.css';
import getText from '../../models/TextModel';

class Text extends Component{

    render(){
        let styles = {
            textAlign: 'left',
            fontSize: '0.88em',
            fontFamily: this.props.fontfamily,
            width: window.innerWidth / (window.innerWidth <= 640 && this.props.section === 'projectItem' ? 1.2 : 2)
        };
        switch(this.props.section){
            case 'projectItem':
                styles.lineHeight = 2;
                break;
            default:
                break;
        }
        return(
            <div className="pr24">
                { getText(this.props.section, styles, this.props.importKey) }
            </div>
        );
    }
}

export default Text;