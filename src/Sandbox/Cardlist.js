import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { saveData } from './../functions/Functions';
import Cardinfo from './Cardinfo';

// import ModalWin from './modalwin/Modalwin.js';

class Cardlist extends React.Component {
    constructor (props) {
        super(props)

        this.state = {showWin: "hide"}
        this.data = this.props.data
        this.cards = this.data.cards
        this.handlerClick = this.handlerClick.bind(this)
    }

    handlerClick (){
        this.setState({showWin: "show"});

    }

    updateData = (value) => {
        this.setState({ showWin: value });
    }

    render() {
        var listItems = this.cards.map((item, index) =>
            <li key={item.title} id={index} onClick={this.handlerClick}>
                <h3>{item.title}</h3>
                <p>Comment: {item.comments.length - 1}</p>
            </li>
    
        );
        return (
            
            <div id="cardlist">
                {this.state.showWin == "show" && <Cardinfo data={this.data} updateData={this.updateData} />}
                <ul>
                    {listItems}
                </ul>
            </div> 
        );
    }
}

export default Cardlist;
