import React, { Component } from 'react';
import '../styles/Experience.css';
import DetailCard from '../../components/views/DetailCard';

class Experience extends Component {

    render(){
        var cardContainer = {
            position: 'absolute',
            bottom: window.innerHeight / 4 + 'px'
        };
        return(
            <div className='experience-container' styles={ cardContainer }>
                <div>
                    <DetailCard section='experience' key='0'/>
                    <DetailCard section='experience' key='1'/>
                    <DetailCard section='experience' key='2'/>
                    <DetailCard section='experience' key='3'/>
                </div>
            </div>
        );
    }
}

export default Experience;
