import React, { Component } from 'react';
import '../styles/SideView.css';
import Text from '../views/Text';
import { connect } from 'react-redux';
import FontAwesomeIcon from './FontAwesomeIcon';
import { showMoreInfo } from '../../redux/actions';
import { getProjectDate } from '../../models/TextModel';
import { getProjectTitle } from '../../models/TextModel';

class SideViewComponent extends Component {

    render() {
        if (!this.props.showMoreInfoView) {
            return(null);
        }
        else {
            const dateLabel = [];
            dateLabel.push(<p className="date-label">{getProjectDate(this.props.importKey)}</p>);
            return(
                <div className='side-view' style={this.sideViewStyle()}>
                    <div>
                        <FontAwesomeIcon name="arrow-left" size="2x" style={{cursor: 'pointer'}} onClick={()=>{this.props.showMoreInfo()}}/>
                        <span className="side-view-title">{getProjectTitle(this.props.importKey)}</span>
                        {dateLabel}
                    </div>
                    <div className='side-view-body'>
                        <Text fontfamily='Montserrat' section="projectItem" importKey={this.props.importKey}/>
                    </div>
                </div>
            );
        }
    }
    sideViewStyle() {
        return {
            width: window.innerWidth < 640 ? window.innerWidth-22 + 'px' : '60vw',
            height: window.innerHeight + 'px'
        }
    }
}

const mapStateToProps = state => ({
    importKey: state.projectMoreInfoKey,
    showMoreInfoView: state.showMoreInfo
});
  
const mapDispatchToProps = dispatch => ({
    showMoreInfo: showInfo => dispatch(showMoreInfo(showInfo))
});

const SideView = connect(mapStateToProps, mapDispatchToProps)(SideViewComponent);
export default SideView;