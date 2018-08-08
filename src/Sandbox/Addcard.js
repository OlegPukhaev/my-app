import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { saveData } from './../functions/Functions';

// import ModalWin from './modalwin/Modalwin.js';

class Addcard extends React.Component {
    constructor (props) {
        super(props)
        
        this.state = {value: ""}
        this.handlerClick = this.handlerClick.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerClick(){
        var obj1 = {
                        "title": this.state.value,
                        "desc": "",
                        "comments" :[""],
                        "autor":""    
                    };
              
        this.props.updateData("hide");
        // alert(this.state.value);
        if (this.state.value) {
            this.props.data.cards.push(obj1);
            saveData(this.props.data, this.props.table);
            // alert(this.props.data.cards[1].title + " d "+ this.props.table);
        }
    }

    handlerChange(event){
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div id="addcard">
                <form class="userform">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Add Card Title</label>
                        <input type="email" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>

                    <button type="submit" class="btn btn-primary" onClick={this.handlerClick}>Submit</button>
                </form>
            </div> 
        );
    }
}

export default Addcard;
