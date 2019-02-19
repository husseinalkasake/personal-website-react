import React, { Component } from 'react';
import '../styles/Home.css';
import LogosCard from '../../components/views/LogosCard';

class Home extends Component {

    render(){
        var homeStyle = {
            width: window.innerWidth + 'px', 
            height: window.innerHeight + 'px'
        };
        var containerStyle = {
            top: window.innerHeight/4 + 'px',
        };
        return(
            <div className='home-container' style={homeStyle}>
                <div style={{justifyContent: 'center'}}>
                    <div style={containerStyle}>
                        <p>Software Developer</p>
                        <p>MECHATRONICS ENGINEERING</p>
                        <LogosCard/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

