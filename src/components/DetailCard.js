import React, { Component } from 'react';
import '../App.css';
import getText from '../models/TextModel';

class DetailCard extends Component {

    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        var styles = {
            display: 'flex',
            'flex': 1
        };
        var rightStyle = {
            'height': 'auto',
            'justify-content': 'center'
        }
        var imgStyles = {
            'max-width':'100%',
            'max-height':'100%'
        };
        return(
            <div styles={styles}>
                <img styles={imgStyles} src={require('../images/globalive_logo.png')}/>
                <div styles={rightStyle}>
                    <p>Test</p>
                    <p>Test</p>
                    <p>Tests</p>
                </div>
            </div>
        );
    }
}

export default DetailCard;
