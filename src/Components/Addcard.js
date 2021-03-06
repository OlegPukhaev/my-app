import React, { Component } from 'react';
import './App.css';
import { saveData, getData } from './../functions/Functions';
import Darkback from './Darkback';

class Addcard extends React.Component {
    constructor (props) {
        super(props)
        
        this.state = {value: ""}
        this.handlerClick = this.handlerClick.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerClick(){
            var autor = getData("Username");
            var obj1 = {
                            "title": this.state.value,
                            "desc": null,
                            "comments" :[],
                            "autor": autor    
                        };
                
            this.props.updateData("hide");
            if (this.state.value) {
                this.props.data.cards.push(obj1);
                saveData(this.props.data, this.props.table);
            }
    }

    handlerChange(event){
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div >
                <Darkback tabIndex="0" />
                    <div class="coll bg-lightgray" id="addcard">
                        <label for="exampleInputEmail1">Add Card Title</label>
                        <input type="text" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enterr card title" />
                        <button type="submit" class="btn btn-primary p-2" onClick={this.handlerClick}>Submit</button>
                    </div>
            </div> 
        );
    }
}

export default Addcard;
