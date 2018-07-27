import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

function Hello(props){//Функциональный компонент
  return <h1>Hello, {props.name}</h1>;
}

function App(){
  return (
    <div>
      <Hello name="Oleg" />
      <Hello name="Kate" />
      <Hello name="Dima" />
      <Hello name="Lisa" />
    </div>
  );
}

//const elem = <Hello name="alex" />
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
//Элемент тикающие часы, именно элемент, реакт ДОМ обновляет только изменяющяет
//только то что изменяется
// function Tick(){
//   const element = (
//       <div>
//         <h1>Hello!</h1>
//         <h2>Time is {new Date().toLocaleTimeString()}</h2>
//       </div>
//   );
//   ReactDOM.render(
//     element, document.getElementById('root')
//   );
// }
// setInterval(Tick, 1000)
