import React, { Component } from 'react';
import '../styles/Projects.css';
import '../../styles/App.css';
import { projectCount } from '../../models/TextModel';
import DetailCard from '../../components/views/DetailCard';
import SectionHeader from '../../components/views/SectionHeader';

class Projects extends Component {

    render(){
        const cardContainer = {
            position: 'absolute',
            bottom: window.innerHeight / 4 + 'px'
        };
        const projects = [];
        for(let i = 0; i < projectCount; i++)
            projects.push(<DetailCard section='projects' importKey={i} />);
        return(
            <div className='projects-container' styles={ cardContainer } id="projects">
                <SectionHeader text="Projects" />
                <div className="inner-container">{projects}</div>
            </div>
        );
    }
}

export default Projects;