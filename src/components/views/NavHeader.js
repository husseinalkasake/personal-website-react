import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/NavHeader.css';

class NavHeader extends Component {

    render(){
        const homeLink = {
            fontSize: window.innerWidth <= 900 ? '1em' : '2.25em'
        }
        return(
            <div className='nav-header'>
                <Link className='link' to='/home'>
                    <a className="home-link" style={homeLink}>Hussein Alkasake</a>
                </Link>
                <Link className={this.linkClasses('/about')} to='/about'>About</Link>
                <Link className={this.linkClasses('/experience')} to='/experience'>Experience</Link>
                <Link className={this.linkClasses('/projects')} to='/projects'>Projects</Link>
                <Link className={this.linkClasses('/education')} to='/education'>Education</Link>
            </div>
        );
    }
    
    linkClasses(path) {
        return 'link' + (window.location.pathname === path ? ' selected-link' : '');
    }
}

export default NavHeader;

