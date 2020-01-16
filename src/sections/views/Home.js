import React, { Component } from 'react';
import '../styles/Home.css';
import Links from '../../components/views/Links';

class Home extends Component {

    render(){
        return(
            <div className='home-container' style={this.dynamicSize()} id="home">
                <div className="text-container">
                    <p>Software Developer</p>
                    <p className="subheader">MECHATRONICS ENGINEERING</p>
                    <Links large={true}/>
                </div>
            </div>
        );
    }
    dynamicSize () {
        return { flexDirection: (window.innerWidth <= 640 ? 'column-reverse' : 'row') };
    }
}

export default Home;

