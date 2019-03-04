import React, { Component } from 'react';
import Image from 'react-image-resizer';
import '../styles/DetailCard.css';
import Text from '../views/Text';
import getImage from '../../models/ImageModel';
class DetailCard extends Component {

    render(){
        return(
            <div className="detail-card">
                <div className="image-container">
                    <Image src={`${ getImage(this.props.section, this.props.importKey) }`} height={window.innerHeight / 5} width={window.innerWidth / 5}/>
                </div>
                <div className="detail-text">
                    <Text fontfamily='Montserrat' section={this.props.section} importKey={this.props.importKey}/>
                </div>
            </div>
        );
    }
}

export default DetailCard;