import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// function Hello(props){//Функциональный компонент
//   return <h1>Hello, {props.name}</h1>;
// }

// function App(){
//   return (
//     <div>
//       <Hello name="Oleg" />
//       <Hello name="Kate" />
//       <Hello name="Dima" />
//       <Hello name="Lisa" />
//     </div>
//   );
// }


class App extends Component {

  constructor () {
    super();
    this.name = "Dima and Lisa";
  }

  getName (lastname){
    return "My cat name Un " + lastname;
  }
  
  render() {
      var myname ="Oleg";
      var i = 8;
      var myStyle = {
            color : 'green',
            fontSize: 50
          }


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {myname}</h1>
          <h1 data-myattribute = "somevalue">Welcome to React {myname} мой атрибут используется для чего то</h1>
          <h1 style = {myStyle}>Можно изменять стили даже</h1>
        </header>

        {/*
          многострочный коментарий

          */}

        <p>{2+2}</p>
        <p>Можно писать функцию внутри JSX {(function () {return 8;})()}</p>
        <p>{this.getName("Olegovich")}</p>
        <p>{this.name}</p>
        <p>Теранарное выражение { i > 5 ? 'Это правда чувак' : 'Не равно пяти' }</p>
      </div>

    );
  }
}

export default App;
