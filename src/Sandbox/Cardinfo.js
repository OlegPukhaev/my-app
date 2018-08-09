import React, { Component } from 'react';
import './App.css';
import Comments from './Comments';
import { deleteData, saveData, getData } from '../functions/Functions';

class Cardinfo extends React.Component {
    constructor (props) {
        super(props)

        // this.data = this.props.data
        this.data = this.props.data
        this.id = this.props.id
        this.state =    { 
                            title : this.data.cards[this.id].title,
                            desc : this.data.cards[this.id].desc,
                        }
        this.handlerClick = this.handlerClick.bind(this)
        this.onclickDelete = this.onclickDelete.bind(this)
        this.onChangetitle = this.onChangetitle.bind(this)
        this.onChangedesc = this.onChangedesc.bind(this)
        this.onclickSave = this.onclickSave.bind(this)
    }

    handlerClick () {
        this.props.updateData("hide");
    }

    onclickDelete () {
        deleteData (this.data.cards, this.id);
        saveData(this.data, this.props.table);
        this.props.updateData("hide");
    }

    onChangetitle (event){
        this.setState({title : event.target.value});
    }

    onChangedesc (event){
        this.setState({desc : event.target.value});
    }

    onclickSave (event){
        alert(event.target.id);
        {event.target.id === "title"  && (this.data.cards[this.id].title = this.state.title)}
        {event.target.id === "desc"  && (this.data.cards[this.id].desc = this.state.desc)}
        // alert(this.id + "->" + obj.cards[this.id].title + "->" + this.state.title);
        saveData(this.data, this.props.table);
    }

    render() {
        return (
            <div id="cardinfo">
                <button onClick={this.handlerClick}>Close</button>
                <button onClick={this.onclickDelete}>Delete Card</button>
               
                <h2 onClick={this.show}>Title: {this.state.title}</h2>
                <input type="text" value={this.state.title} onChange={this.onChangetitle}/>
                <button id="title" onClick={this.onclickSave}>Save title</button>
                <p>from <b>{this.data.colname}</b></p>
               
                <p>Description:{this.state.desc}</p>
                <input type="text" value={this.state.desc} onChange={this.onChangedesc}/>
                <button id="desc" onClick={this.onclickSave}>Save Description</button>                 
               
                 <p>Autor: {this.data.cards[this.id].autor}</p>
               
                 <Comments data={this.data} table={this.props.table} id={this.id}/>

                 {/* <button onClick={this.onclickSave}>Save Card</button> */}
            </div> 
        );
    }
}

export default Cardinfo;
