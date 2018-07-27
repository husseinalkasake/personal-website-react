import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom"; 
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './App.css';

class Navigator extends Component {

    render(){
        return(
            <Router>
                <div class='nav-container' style={{'background-color': 'black'}}>
                <div class='nav-header' style={{'font-family': 'Montserrat', 'font-weight': 'bold'}}>
                    <Link class='link' to='/home'>
                        <a style={{'font-weight': 'normal'}}><font color="red" size='12' face="GreatDay">Hussein Alkasake</font></a>
                    </Link>
                    <Link class='link' to='/about'>About</Link>
                    <Link class='link' to='/experience'>Experience</Link>
                    <Link class='link' to='/education'>Education</Link>
                    <Link class='link' to='/projects'>Projects</Link>
                    <Link class='link' to='/contact'>Contact</Link>
                </div>
                <div class='nav-body'>
                    <Switch>
                        <Route exact path='/' render={()=> <Redirect path from='/' to='/home'/>}/>
                        <Route path='/home' render={()=> <Home/>}/>
                        <Route path='/about' render={()=> <About/>}/>
                        <Route path='/skills' render={()=> <Skills/>}/>
                        <Route path='/experience' render={()=> <Experience/>}/>
                        <Route path='/education' render={()=> <Education/>}/>
                        <Route path='/projects' render={()=> <Projects/>}/>
                        <Route path='/contact' render={()=> <Contact/>}/>
                    </Switch>
                </div>
                </div>
            </Router>
        );
    }
}

export default withRouter(Navigator);

