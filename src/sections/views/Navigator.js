import React, { Component } from 'react';
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
import '../styles/Navigator.css';
import Skills from './Skills';

class Navigator extends Component {

    render(){
        return(
            <Router>
                <div>
                    <SideView/>
                    <div className='nav-container'>
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

export default withRouter(Navigator);

