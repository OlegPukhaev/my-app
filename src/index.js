import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import allReducers from './reducers';

const store = createStore (allReducers);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// var obj1 = {
//   "colname" : "TODO", 
//   "cards": [
//           {
//               "title":"Give Me some money",
//               "desc":"Дескрипшин",
//               "comments" :[{
//                     "comment":"Comment 1",
//                     "autor":"Vasya"
//                   }],
//               "autor" : "Oleg"
//           }
//         ]
// };

// saveData(obj1 , "tab1");
// saveData(obj1 , "tab2");
// saveData(obj1 , "tab3");
// saveData(obj1 , "tab4");

