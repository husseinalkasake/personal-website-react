import React, { Component } from 'react';
import '../styles/Navigator.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom"; 
import Home from './Home';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import NavHeader from '../../components/views/NavHeader';
import SideView from '../../components/views/SideView';
import SideMenu from '../../components/views/SideMenu';
import Skills from './Skills';
import { connect } from 'react-redux';
import { closeMenus } from '../../redux/actions';

class NavigatorComponent extends Component {

    render(){
        return(
            <Router>
                <div>
                    <SideView/>
                    <SideMenu/>
                    <div className='nav-container' onClick={()=> this.props.closeMenus()}>
                        <NavHeader/>
                        <div className='nav-body'>
                            <Switch>
                                <Route path='/home' render={()=> <Home/>}/>
                                <Route path='/about' render={()=> <About/>}/>
                                <Route path='/experience' render={()=> <Experience/>}/>
                                <Route path='/education' render={()=> <Education/>}/>
                                <Route path='/projects' render={()=> <Projects/>}/>
                                <Route path='/contact' render={()=> <Contact/>}/>
                                <Route path='/skills' render={()=> <Skills/>}/>
                                <Route render={()=> <Redirect to='/home'/>}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
  
const mapDispatchToProps = dispatch => ({
    closeMenus: () => dispatch(closeMenus())
});

const Navigator = connect(null, mapDispatchToProps)(NavigatorComponent);
export default withRouter(Navigator);

