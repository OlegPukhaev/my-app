import React  from 'react';
import './App.css';
import '../../src/bootstrap.css';

class Darkback extends React.Component {

    render() {
      return (
          <div id="darkback" onClick={this.handlerClick}>
          </div> 
      );
    }
}

export default Darkback;