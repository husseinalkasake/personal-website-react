import React, { Component } from 'react';
import '../../styles/App.css';
import getText from '../../models/TextModel';

class Text extends Component{

    render(){
        let styles = {};
        switch(this.props.section){
            case 'about':
                styles  = {
                    fontSize: '14px',
                    textAlign: 'left',
                    fontFamily: this.props.fontfamily,
                    width: window.innerWidth/2.2 + 'px'
                };
            case 'experience':
                styles = {
                    fontSize: '14px',
                    textAlign: 'left',
                    fontFamily: this.props.fontfamily,
                    width: window.innerWidth/2.2 + 'px'
                };
        }
        return(
            <div className="pr24">
                { getText(this.props.section, styles, this.props.importKey) }
            </div>
        );
    }
}

export default Text;