import React, { Component } from 'react';
import '../styles/SectionHeader.css';

class SectionHeader extends Component {
    render() {
        return <div className='section-header'>{this.props.text}</div>;
    }
}

export default SectionHeader;
