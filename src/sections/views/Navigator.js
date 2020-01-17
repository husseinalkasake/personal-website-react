import React, { Component } from 'react';
import '../styles/Navigator.css';
import Home from './Home';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import NavHeader from '../../components/views/NavHeader';
import SideView from '../../components/views/SideView';
import SideMenu from '../../components/views/SideMenu';
import { connect } from 'react-redux';
import { closeMenus } from '../../redux/actions';

class NavigatorComponent extends Component {
    render() {
        return (
            <div>
                <SideView />
                <SideMenu />
                <div
                    className='nav-container'
                    onClick={() => this.props.closeMenus()}>
                    <div className='nav-body'>
                        <Home />
                    </div>
                    <NavHeader />
                    <About />
                    <Experience />
                    <Projects />
                    <Education />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    closeMenus: () => dispatch(closeMenus())
});

const Navigator = connect(null, mapDispatchToProps)(NavigatorComponent);
export default Navigator;
