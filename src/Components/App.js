import React  from 'react';
import './App.css';
import '../../src/bootstrap.css';
import Username from './Username';
import Colllist from './Colllist';
import TodoList from './Todolist';
import {Provider} from 'react-redux';
import store from '../store';

class App extends React.Component {
    constructor () {
        super()

        this.state = { activeWin : "show"};
    }

    updateData = (value) => {
        this.setState({ activeWin: value });
    }

    render() {
      return (
          <div>
                {/* {this.state.activeWin == null ? <Username updateData={this.updateData}/> : <Colllist />} */}
                <Provider store={store}>
                    {/* <TodoList />    */}
                    <Colllist />
                </Provider>
          </div> 
      );
    }
}

export default App;