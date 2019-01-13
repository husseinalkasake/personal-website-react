import React, { Component } from 'react';
import '../App.css';
import DetailCard from '../components/DetailCard';

class Experience extends Component {

    render(){
        var styles = {
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: '100%', height: '100%', position: 'absolute'
          };
        return(
            <div style={styles} class='experience-container'>
                <DetailCard/>
            </div>
        );
    }
}

export default Experience;
