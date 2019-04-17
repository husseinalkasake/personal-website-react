import React, { Component } from 'react';
import '../styles/Projects.css';
import DetailCard from '../../components/views/DetailCard';

class Projects extends Component {

    render(){
        var cardContainer = {
            position: 'absolute',
            bottom: window.innerHeight / 4 + 'px'
        };
        return(
            <div className='projects-container' styles={ cardContainer }>
                <div>
                    <DetailCard section='projects' importKey={0}/>
                    <DetailCard section='projects' importKey={1}/>
                    <DetailCard section='projects' importKey={2}/>
                    <DetailCard section='projects' importKey={3}/>
                </div>
            </div>
        );
    }
}

export default Projects;