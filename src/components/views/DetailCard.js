import React, { Component } from 'react';
import Image from 'react-image-resizer';
import '../styles/DetailCard.css';
import Text from '../views/Text';
import getImage from '../../models/ImageModel';
class DetailCard extends Component {

    render(){
        return(
            <div className="detail-card" style={this.dynamicStyle()}>
                <div className="image-container">
                    <Image src={`${ getImage(this.props.section, this.props.importKey) }`} height={this.dynamicImageHeight()} width={this.dynamicImageWidth()}/>
                </div>
                <div className="detail-text">
                    <Text fontfamily='Montserrat' section={this.props.section} importKey={this.props.importKey}/>
                </div>
            </div>
        );
    }
    dynamicImageHeight () {
        return window.innerHeight / 5;
    }
    dynamicImageWidth () {
        return window.innerWidth / 5;
    }
    dynamicStyle () {
        let styles = {};
        switch (this.props.section) {
            case 'projects':
                styles = {
                    height: window.innerHeight/2 + 'px'
                };
                break;
            case 'education':
                styles = {
                    height: window.innerHeight/2 + 'px'
                };
                break;
            default:
                break;
        }
        return styles;
    }
}

export default DetailCard;