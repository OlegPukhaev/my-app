import React  from 'react';
import {Provider, connect} from 'react-redux';
import store from '../store';

import './App.css';
import '../../src/bootstrap.css';
import Username from './Username';
import Colllist from './Colllist';
import TodoList from './Todolist';

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
                <Provider store={store}>
                    <div>
                        <Colllist />
                        {/* {this.state.activeWin == null ? <Username updateData={this.updateData}/> : <Colllist />} */}
                    </div>
                        {/* <TodoList />    */}
                </Provider>
      );
    }
}

export default App;