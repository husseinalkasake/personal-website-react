import React, { Component } from 'react';
import '../styles/Education.css';
import { educationCount } from '../../models/TextModel';
import DetailCard from '../../components/views/DetailCard';

class Education extends Component {

    render(){
        const cardContainer = {
            position: 'absolute',
            bottom: window.innerHeight / 4 + 'px'
        };
        const education = [];
        for(let i = 0; i < educationCount; i++)
            education.push(<DetailCard section='education' importKey={i}/>);
        return(
            <div className='education-container' styles={ cardContainer }>
                <div>{ education }</div>
            </div>
        );
    }
}

export default Education;