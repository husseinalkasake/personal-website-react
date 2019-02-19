import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {

    render(){
        var styles = {
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: '100%', height: '100%', position: 'absolute'
          };
        return(
            <div style={styles} className='contact-container'>
                <p>Contact!!</p>
            </div>
        );
    }
}

export default Contact;
