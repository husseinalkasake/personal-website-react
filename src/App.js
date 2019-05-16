import React, { Component } from 'react';
import './styles/App.css';
import MediaLoad from './MediaLoad';
import { HashRouter } from "react-router-dom";
import Navigator from './sections/views/Navigator';

class App extends Component {

  render() {
    return (
        <div className='app-container'>
          <HashRouter>
            <Navigator/>
          </HashRouter>
          <MediaLoad/>
        </div>
    );
  }
}

export default App;