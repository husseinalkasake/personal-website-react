import React, { Component } from 'react';
import '../styles/Education.css';
import DetailCard from '../../components/views/DetailCard';

class Education extends Component {

    render(){
        var cardContainer = {
            position: 'absolute',
            bottom: window.innerHeight / 4 + 'px'
        };
        return(
            <div className='education-container' styles={ cardContainer }>
                <div>
                    <DetailCard section='education' importKey={0}/>
                    <DetailCard section='education' importKey={1}/>
                </div>
            </div>
        );
    }
}

export default Education;