import React from 'react';
import ReactDOM from 'react-dom';
import { saveData } from './functions/Functions';

// import App from './App';//рабочая запутанная версия
import App from './Sandbox/App';//рабочая запутанная версия

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// var obj1 = {
//   "colname" : "Done", 
//   "cards": [
//           {
//               "title":"Give Me some money",
//               "desc":"Ogolodal narod chestnoj",
//               "comments" :["Cool","Bad", "Cool"],
//               "autor" : "Oleg"
//           }
//       ]
// };

// saveData(obj1 , "tab1");


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
