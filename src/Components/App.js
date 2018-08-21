import React  from 'react';
import {Provider} from 'react-redux';
import Colllist from './Colllist';
import store from '../store';
import './App.css';
import '../../src/bootstrap.css';

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
                    </div>
                </Provider>
      );
    }
}

export default App;