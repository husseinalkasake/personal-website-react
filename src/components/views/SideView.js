import React, { Component } from 'react';
import '../styles/SideView.css';
import Text from '../views/Text';
import { connect } from 'react-redux';
import CustomIcon from './CustomIcon';
import CustomButton from './CustomButton';
import { showMoreInfo } from '../../redux/actions';
import { getProjectDate } from '../../models/TextModel';
import { getProjectTitle } from '../../models/TextModel';
import { getProjectSource } from '../../models/TextModel';

class SideViewComponent extends Component {

    render() {
        if (!this.props.showMoreInfoView) {
            return(null);
        }
        else {
            return(
                <div className='side-view' style={this.sideViewStyle()}>
                    <div>
                        <CustomIcon name="arrow-left" size="2x" style={{cursor: 'pointer'}} onClick={()=>{this.props.showMoreInfo()}}/>
                        <span className="side-view-title">{getProjectTitle(this.props.importKey)}</span>
                        <p className="date-label">{getProjectDate(this.props.importKey)}</p>
                    </div>
                    <div className='side-view-body'>
                        <Text fontfamily='Montserrat' section="projectItem" importKey={this.props.importKey}/>
                        { this.sourceButton() }
                    </div>
                </div>
            );
        }
    }
    sourceButton() {
        const source = [];
        const projectSource = getProjectSource(this.props.importKey);
        if (projectSource !== null) {
            source.push(<a target="_blank" href={projectSource}><CustomButton text="View on Github"/></a>);
        }
        return source;
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