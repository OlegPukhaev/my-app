import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import ModalWin from './modalwin/Modalwin.js';
import Mainboard from './board/Mainboard.js';
import Navigation from './navbar/Navigation.js';

class App extends Component {

  render() {
    return (
        <div>
           <ModalWin />
           <Navigation />
           <Mainboard />
        </div> 
    );
  }
}

export default App;
