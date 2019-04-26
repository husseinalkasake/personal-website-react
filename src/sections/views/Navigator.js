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
import Skills from './Skills';
import { connect } from 'react-redux';
import { showMoreInfo } from '../../redux/actions';

class NavigatorComponent extends Component {

    render(){
        return(
            <Router>
                <div>
                    <SideView/>
                    <div className='nav-container' onClick={()=> this.props.showMoreInfo(false)}>
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
    showMoreInfo: showInfo => dispatch(showMoreInfo(showInfo))
});

const Navigator = connect(null, mapDispatchToProps)(NavigatorComponent);
export default withRouter(Navigator);

