import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class Hello extends React.Component {
//   render(){
//     return <h1>Hello, Olegovich!</h1>;
//   }
// }
//
// export default Hello;

class ModalWin extends React.Component {
    render (){
        return (
            <div>
                <h1>Окно</h1>
                <p>Новое изменение</p>

            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <p>Some Text</p>
        );
    }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;
