import React, { Component } from 'react';
import '../styles/Experience.css';
import '../../styles/App.css';
import { experienceCount } from '../../models/TextModel';
import DetailCard from '../../components/views/DetailCard';
import SectionHeader from '../../components/views/SectionHeader';

class Experience extends Component {

    render(){
        const cardContainer = {
            position: 'absolute',
            bottom: window.innerHeight / 4 + 'px'
        };
        const experience = [];
        for(let i = 0; i < experienceCount; i++)
            experience.push(<DetailCard section='experience' importKey={i}/>);
        return(
            <div className='experience-container' id="experience" styles={ cardContainer }>
                <SectionHeader text="Experience" />
                <div className="inner-container">{ experience }</div>
            </div>
        );
    }
}

export default Experience;
