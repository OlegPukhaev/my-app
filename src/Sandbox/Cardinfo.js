import React, { Component } from 'react';
import './App.css';
import Comments from './Comments';
import { deleteData, saveData } from '../functions/Functions';

class Cardinfo extends React.Component {
    constructor (props) {
        super(props)

        this.data = this.props.data
        this.id = this.props.id
        this.handlerClick = this.handlerClick.bind(this)
        this.onclickDelete = this.onclickDelete.bind(this)
    }

    handlerClick () {
        this.props.updateData("hide");
    }

    onclickDelete () {
        deleteData (this.data.cards, this.id);
        // alert(this.props.table)
        saveData(this.data, this.props.table);
        this.props.updateData("hide");
    }

    render() {
        return (
            <div id="cardinfo">
                <button onClick={this.handlerClick}>Close</button>
                <button onClick={this.onclickDelete}>Delete Card</button>
                <h2>Title: {this.data.cards[this.id].title}</h2>
                <p>from <b>{this.data.colname}</b></p>
                 <p>Description:{this.data.cards[this.id].desc}</p>
                 <p>Autor: {this.data.cards[this.id].autor}</p>
                 <Comments data={this.data} table={this.props.table} id={this.id}/>
            </div> 
        );
    }
}

export default Cardinfo;
