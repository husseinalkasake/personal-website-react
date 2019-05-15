import React, { Component } from 'react';
import './styles/App.css';
import preloadMedia from './MediaLoad';
import { BrowserRouter } from "react-router-dom";
import Navigator from './sections/views/Navigator';

class App extends Component {
  componentDidMount() {
    preloadMedia();
  }

  render() {
    return (
        <div className='app-container'>
          <BrowserRouter>
            <Navigator/>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;