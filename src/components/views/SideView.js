import React, { Component } from 'react';
import '../styles/SideView.css';
import { connect } from 'react-redux';

class SideViewComponent extends Component {

    render() {
        if (!this.props.showMoreInfo) {
            return(null);
        }
        else {
            return(
                <div className='side-view' style={this.sideViewStyle()}>
                    TEST
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
    showMoreInfo: state.showMoreInfo
});

const SideView = connect(mapStateToProps)(SideViewComponent);
export default SideView;