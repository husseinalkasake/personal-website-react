import React, { Component } from 'react';
import '../styles/Projects.css';
import { projectCount } from '../../models/TextModel';
import DetailCard from '../../components/views/DetailCard';

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
            <div className='projects-container' styles={ cardContainer }>
                <div>{projects}</div>
            </div>
        );
    }
}

export default Projects;