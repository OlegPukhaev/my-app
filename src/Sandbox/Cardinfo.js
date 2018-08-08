import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { saveData } from './../functions/Functions';

// import ModalWin from './modalwin/Modalwin.js';

class Cardinfo extends React.Component {
    constructor (props) {
        super(props)

        this.cards = this.props.cards
        this.handlerClick = this.handlerClick.bind(this)
    }

    handlerClick () {
        this.props.updateData("hide");
    }

    render() {
        return (
            <div id="cardinfo">
                <button onClick={this.handlerClick}>Close</button>
            </div> 
        );
    }
}

export default Cardinfo;
