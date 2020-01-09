import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {

    render(){
        const cardContainer = {
            position: 'absolute',
            bottom: window.innerHeight / 4 + 'px'
        };
        return(
            <div className='contact-container' styles={ cardContainer }>
            </div>
        );
    }
}

export default Contact;