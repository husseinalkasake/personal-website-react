import React, { Component } from 'react';
import Image from 'react-image-resizer';
import '../styles/DetailCard.css';
import getText from '../../models/TextModel';

class DetailCard extends Component {

    render(){
        return(
            <div className="detail-card">
                <Image src={require('../../images/globalive_logo.png')} height="200" width="400"/>
                <div className="detail-text">
                    <p>Test</p>
                    <p>Test</p>
                    <p>Tests</p>
                </div>
            </div>
        );
    }
}

export default DetailCard;
