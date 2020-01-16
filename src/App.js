import React, { Component } from 'react';
import './styles/App.css';
import MediaLoad from './MediaLoad';
import Navigator from './sections/views/Navigator';

class App extends Component {

  render() {
    return (
        <div className='app-container'>
          <Navigator/>
          <MediaLoad/>
        </div>
    );
  }
}

export default App;