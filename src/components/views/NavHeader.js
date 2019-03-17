import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/NavHeader.css';

class NavHeader extends Component {

    render(){
        let homeLink = {
            fontSize: window.innerWidth <= 900 ? '1em' : '2.25em'
        }
        return(
            <div className='nav-header'>
                <Link className='link' to='/home'>
                    <a className="home-link" style={homeLink}>Hussein Alkasake</a>
                </Link>
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to='/experience'>Experience</Link>
                <Link className='link' to='/projects'>Projects</Link>
                {/* <Link className='link' to='/skills'>Skills</Link> */}
                <Link className='link' to='/education'>Education</Link>
                {/* <Link className='link' to='/contact'>Contact</Link>  */}
            </div>
        );
    }
}

export default NavHeader;

