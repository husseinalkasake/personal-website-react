import React, { Component } from 'react';
import '../styles/Education.css';

class Education extends Component {

    render(){
        var styles = {
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: '100%', height: '100%', position: 'absolute'
          };
        return(
            <div style={styles} className='education-container'>
                <p>Education!!</p>
            </div>
        );
    }
}

export default Education;
