import React, { Component } from 'react';
import './App.css';
import Addcomment from './Addcomment';
import {getData} from '../functions/Functions';

class Comments extends React.Component {
    constructor (props) {
        super(props)

        // this.state = {commentValue: ""}
        this.data = this.props.data
        // this.data = getData(this.props.table)
        this.id = this.props.id
        this.table = this.props.table
        // this.handlerClick = this.handlerClick.bind(this)
        // this.handlerChange = this.handlerChange.bind(this)
    }

    render() {
        if (this.data.cards[this.id].comments != null){
                var listItems = this.data.cards[this.id].comments.map((item, index) =>
                    <li key={item.comment} id={index} value={index} onClick={this.handlerClick}>
                        <h3 id={index}>Автор комментария: {item.autor}</h3>
                        <p id={index}>{item.comment}</p>
                    </li>
            );
        } else {
            listItems = "";
        }
        return (
            <div id="cardlist">
                {/* {this.state.showWin == "show" && <Cardinfo id={this.state.activeId} data={this.data} updateData={this.updateData}/>} */}
                <ul>
                    {listItems != null && listItems}
                </ul>
                <Addcomment data={this.data} table={this.table} id={this.id}/>
            </div> 
        );
    }
}

export default Comments;
