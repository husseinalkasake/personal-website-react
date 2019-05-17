import React, { Component } from 'react';
import '../styles/Home.css';
import LogosCard from '../../components/views/LogosCard';

class Home extends Component {

    render(){
        return(
            <div className='home-container' style={this.dynamicSize()}>
                <div className="text-container">
                    <p>Software Developer</p>
                    <p>MECHATRONICS ENGINEERING</p>
                    <LogosCard/>
                </div>
            </div>
        );
    }
    dynamicSize () {
        return { flexDirection: (window.innerWidth <= 640 ? 'column-reverse' : 'row') };
    }
}

export default Home;

