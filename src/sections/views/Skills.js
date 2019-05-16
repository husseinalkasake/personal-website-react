import React, { Component } from 'react';
import '../styles/Skills.css';

class Skills extends Component {

    render(){
        var cardContainer = {
            position: 'absolute',
            bottom: window.innerHeight / 4 + 'px'
        };
        return(
            <div className='skills-container' styles={ cardContainer }>
                {/* <div>
                    <SkillsCard importKey={0}/>
                    <SkillsCard importKey={1}/>
                </div> */}
            </div>
        );
    }
}

export default Skills;