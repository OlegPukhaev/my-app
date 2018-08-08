import React, { Component } from 'react';
import './App.css';
import Username from './Username';
import Colllist from './Colllist';

class App extends React.Component {
    constructor () {
        super()

        this.state = { activeWin : null};
    }

    updateData = (value) => {
        this.setState({ activeWin: value });
    }

    render() {
      return (
          <div>
             {this.state.activeWin == null ? <Username updateData={this.updateData}/> : <Colllist />}
          </div> 
      );
    }
}

export default App;