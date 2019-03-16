import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/NavHeader.css';
import Image from 'react-image-resizer';

class NavHeader extends Component {

    render(){
        return(
            <div className='nav-header'>
                <Link className='link' to='/home'>
                    <a className="home-link">Hussein Alkasake</a>
                    {/* <img src={require('../../images/hussein-alkasake.png')} width="0.8em" height="0.8em"/> */}
                </Link>
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to='/experience'>Experience</Link>
                <Link className='link' to='/projects'>Projects</Link>
                <Link className='link' to='/skills'>Skills</Link>
                <Link className='link' to='/education'>Education</Link>
                {/* <Link className='link' to='/contact'>Contact</Link>  */}
            </div>
        );
    }
}

export default NavHeader;

