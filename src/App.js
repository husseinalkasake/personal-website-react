import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter
} from "react-router-dom"; 
import Navigator from './Navigator';

class App extends Component {
  render() {
    return (
      <div class='app-container'>
      <BrowserRouter>
        <Navigator/>
    </BrowserRouter>
    </div>
    );
  }
}

export default App;
