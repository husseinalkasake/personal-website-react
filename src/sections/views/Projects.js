import React, { Component } from 'react';
import '../styles/Projects.css';

class Projects extends Component {

    render(){
        var styles = {
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            width: '100%', height: '100%', position: 'absolute'
          };
        return(
            <div style={styles} className='projects-container'>
                <p>Projects!!</p>
            </div>
        );
    }
}

export default Projects;
