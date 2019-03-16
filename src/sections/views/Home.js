import React, { Component } from 'react';
import '../styles/Home.css';
import LogosCard from '../../components/views/LogosCard';
import getImage from '../../models/ImageModel';

class Home extends Component {

    render(){
        var styles = {
            height: window.innerHeight / 1.2 + 'px'
        };
        return(
            <div className='home-container' style={styles}>
                <div className="text-container">
                    <p>Software Developer</p>
                    <p>MECHATRONICS ENGINEERING</p>
                    <LogosCard/>
                </div>
            </div>
        );
    }
}

export default Home;

