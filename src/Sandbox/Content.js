import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Addcard from './Addcard';
import { getData } from '../functions/Functions';

// import ModalWin from './modalwin/Modalwin.js';

class Content extends React.Component {
    constructor (props) {
        super (props)

        this.data = getData(this.props.table);
        this.state = {activeForm : "Hide"}
        this.handlerClick = this.handlerClick.bind(this)
    }

    updateData = (value) => {
        this.setState({ activeForm: value });
    }

    handlerClick(){
        this.setState({activeForm: "Show"});
    }

    render() {
        return (
            <div id="content">
                <h1>{this.data.colname}</h1>
                <ul>
                    <li>Title: {this.data.cards[0].title}</li>
                </ul>

                <button type="submit" class="btn btn-primary" onClick={this.handlerClick}>Add Card</button>
                {this.state.activeForm == "Show" && <Addcard data={this.data} updateData={this.updateData}/>}
            </div> 
        );
    }
}

export default Content;
