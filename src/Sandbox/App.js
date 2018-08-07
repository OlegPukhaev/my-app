import React, { Component } from 'react';
import './App.css';
import Username from './Username';
import Content from './Content';



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
             {this.state.activeWin == null ? <Username updateData={this.updateData}/> : <Content table="tab1"/>}
             {/* <Addcard /> */}
             
          </div> 
      );
    }
}

export default App;