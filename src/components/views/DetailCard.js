import React, { Component } from 'react';
import Image from 'react-image-resizer';
import '../styles/DetailCard.css';
import Text from '../views/Text';
import CustomButton from '../views/CustomButton';
import getImage from '../../models/ImageModel';
import { getProjectDate } from '../../models/TextModel';
import { getProjectSource } from '../../models/TextModel';
import { projectHasMoreInfo } from '../../models/TextModel';
import { connect } from 'react-redux';
import { updateMoreInfoKey } from '../../redux/actions';

class DetailCardComponent extends Component {
    render() {
        const dateLabel = [];
        const moreInfo = [];
        if (this.props.section === 'projects') {
            dateLabel.push(
                <p className='date-label'>
                    {getProjectDate(this.props.importKey)}
                </p>
            );
            if (projectHasMoreInfo(this.props.importKey)) {
                moreInfo.push(
                    <CustomButton
                        text='MORE INFO'
                        onClick={() =>
                            this.props.updateMoreInfoKey(this.props.importKey)
                        }
                    />
                );
            }
            const projectSource = getProjectSource(this.props.importKey);
            if (projectSource !== null) {
                moreInfo.push(
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={projectSource}>
                        <CustomButton text='View on Github' />
                    </a>
                );
            }
        }
        return (
            <div className='detail-card' style={this.dynamicStyle()}>
                {dateLabel}
                <div className='card-content'>
                    <div className='image-container'>
                        <Image
                            src={`${getImage(
                                this.props.section,
                                this.props.importKey
                            )}`}
                            height={this.dynamicImageHeight()}
                            width={this.dynamicImageWidth()}
                        />
                    </div>
                    <div className='detail-text'>
                        <Text
                            fontfamily='Montserrat'
                            section={this.props.section}
                            importKey={this.props.importKey}
                        />
                        <div>{moreInfo}</div>
                    </div>
                </div>
            </div>
        );
    }
    dynamicImageHeight() {
        switch (this.props.section) {
            case 'education':
                return window.innerHeight / 3;
            case 'projects':
                return window.innerHeight / 4;
            default:
                return window.innerHeight / 5;
        }
    }
    dynamicImageWidth() {
        if (window.innerWidth <= 640) {
            return window.innerWidth / 1.5;
        }
        switch (this.props.section) {
            case 'projects':
                return window.innerWidth / 7;
            default:
                return window.innerWidth / 6;
        }
    }
    dynamicStyle() {
        let height = '10em';
        let flex = window.innerWidth <= 640 ? 'column' : 'row';
        switch (this.props.section) {
            case 'education':
                height = '20em';
                break;
            default:
                break;
        }
        return { minHeight: height, flexDirection: flex };
    }
}

const mapDispatchToProps = dispatch => ({
    updateMoreInfoKey: key => dispatch(updateMoreInfoKey(key))
});

const DetailCard = connect(null, mapDispatchToProps)(DetailCardComponent);
export default DetailCard;
