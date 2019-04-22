import React, { Component } from 'react';
import '../styles/SideView.css';

class SideView extends Component {

    render(){
        return(
            <div className='side-view' style={this.sideViewStyle()}>
                TEST
            </div>
        );
    }
    sideViewStyle() {
        return {
            width: window.innerWidth < 640 ? window.innerWidth-22 + 'px' : '60vw',
            height: window.innerHeight + 'px'
        }
    }
}

export default SideView;