import React, { Component } from 'react';

class About extends Component {

    render(){
        return(
            <div style={this.style()}>
                { this.props.text }
            </div>
        );
    }

    style = () => {
        return {
            alignItems: 'center',
            color: 'white',
            fontSize: window.innerWidth < 640 ? '2em' : '4em',
            fontWeight: 600,
            position: 'absolute',
            left: '24px',
            top: '0px',
            fontFamily: 'Montserrat'
        }
    }
}


export default About;