import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { saveData } from './../functions/Functions';

// import ModalWin from './modalwin/Modalwin.js';

class Collname extends React.Component {
    constructor (props) {
        super(props)

        this.cards = this.props.cards
    }

    render() {
        var listItems = this.cards.map((item, index) =>
            <li key={item.title} id={index}>
                <h3>{item.title}</h3>
                <p>Comment: {item.comments.length - 1}</p>
            </li>
    
        );
        return (
            <div id="cardlist">
                <ul>
                    {listItems}
                </ul>
            </div> 
        );
    }
}

export default Collname;