import React, { Component } from 'react';
import '../../styles/App.css';
import getText from '../../models/TextModel';

class Text extends Component{

    render(){
        let styles = {};
        switch(this.props.section){
            case 'about':
                styles  = {
                    textAlign: 'left',
                    fontSize: '0.88em',
                    fontFamily: this.props.fontfamily,
                    maxWidth: window.innerWidth/2 + 'px'
                };
                break;
            case 'experience':
                styles = {
                    textAlign: 'left',
                    fontSize: '0.88em',
                    fontFamily: this.props.fontfamily,
                    maxWidth: window.innerWidth/2 + 'px'
                };
                break;
            case 'projects':
                styles = {
                    textAlign: 'left',
                    fontSize: '0.88em',
                    fontFamily: this.props.fontfamily,
                    width: window.innerWidth/2 + 'px'
                };
                break;
            case 'education':
                styles = {
                    textAlign: 'left',
                    fontSize: '0.88em',
                    fontFamily: this.props.fontfamily,
                    width: window.innerWidth/2 + 'px'
                };
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