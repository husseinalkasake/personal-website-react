import React, { Component } from 'react';
import '../App.css';

class Experience extends Component {

    render(){
        var styles = {
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: '100%', height: '100%', position: 'absolute'
          };
        return(
            <div style={styles} class='experience-container'>
                <p>Experience!!</p>
            </div>
        );
    }
}

export default Experience;
