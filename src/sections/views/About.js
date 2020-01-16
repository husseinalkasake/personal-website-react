import React, { Component } from 'react';
import '../styles/About.css';
import '../../styles/App.css';
import Links from '../../components/views/Links';
import Text from '../../components/views/Text';
import SectionHeader from '../../components/views/SectionHeader';

class About extends Component {

    render(){
        return(
            <div style={this.dynamicSize()} className='about-container' id="about">
                <SectionHeader text="About Me" />
                <div className="inner-container">
                    <Text fontfamily='Montserrat' section='about'/>
                    <Links whiteLogo={true}/>
                </div>
            </div>
        );
    }
    dynamicSize () {
        return { flexDirection: (window.innerWidth <= 640 ? 'column-reverse' : 'row') };
    }
    dynamicImageHeight () {
        return window.innerHeight / 1.5;
    }
    dynamicImageWidth () {
        return window.innerHeight / 2;
    }
}

export default About;