import React, { Component } from 'react';
import Image from 'react-image-resizer';
import '../styles/DetailCard.css';
import Text from '../views/Text';
import getImage from '../../models/ImageModel';
import { getProjectDate } from '../../models/TextModel';
import { connect } from 'react-redux';
import { showMoreInfo } from '../../redux/actions';

class DetailCardComponent extends Component {
    state = {
        showMoreInfo: false
    }

    render(){
        const dateLabel = [];
        const moreInfo = [];
        if (this.props.section === 'projects') {
            dateLabel.push(<p className="date-label">{getProjectDate(this.props.importKey)}</p>);
            moreInfo.push(<div className="more-info-button" onClick={()=> this.setState({showMoreInfo: true})}>MORE INFO</div>);
        }
        return(
            <div className="detail-card" style={this.dynamicStyle()}>
                { dateLabel }
                <div className="card-content">
                    <div className="image-container">
                        <Image src={`${ getImage(this.props.section, this.props.importKey) }`} height={this.dynamicImageHeight()} width={this.dynamicImageWidth()}/>
                    </div>
                    <div className="detail-text">
                        <Text fontfamily='Montserrat' section={this.props.section} importKey={this.props.importKey}/>
                        { moreInfo }
                    </div>
                </div>
            </div>
        );
    }
    dynamicImageHeight () {
        switch(this.props.section) {
            case 'education':
                return window.innerHeight / 3;
            default:
                return window.innerHeight / 5;
        }
    }
    dynamicImageWidth () {
        return window.innerWidth / 5;
    }
    dynamicStyle () {
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
};

const mapStateToProps = state => ({
    showMoreInfo: state.showMoreInfo
});
  
const mapDispatchToProps = dispatch => ({
    showMoreInfoTest: showInfo => dispatch(showMoreInfo(showInfo))
});

const DetailCard = connect(mapStateToProps, mapDispatchToProps)(DetailCardComponent);
export default DetailCard;