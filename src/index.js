import React from 'react';
import ReactDOM from 'react-dom';
import { SaveData } from './functions/Functions';

import App from './App';
// import Hello from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// var obj1 = {
//   "colname" : "Lego", 
//   "cards": [
//           {
//               "title":"Give Me some money",
//               "desc":"",
//               "comments" :["Cool","Bad", "Cool"]
//           }
//       ]
// };
// SaveData(obj1 , "tab1");


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
