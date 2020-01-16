import React, { Component } from 'react';
import '../styles/Education.css';
import '../../styles/App.css';
import { educationCount } from '../../models/TextModel';
import DetailCard from '../../components/views/DetailCard';
import SectionHeader from '../../components/views/SectionHeader';

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
            <div className='education-container' styles={ cardContainer } id="education">
                <SectionHeader text="Education" />
                <div className="inner-container">{ education }</div>
            </div>
        );
    }
}

export default Education;