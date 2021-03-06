import React, { Component } from 'react';
import './App.css';
import { saveData } from '../functions/Functions';
import Darkback from './Darkback';

class Username extends React.Component {
    constructor (props) {
        super(props)

        this.state = {username : ""}
        this.handlerClick = this.handlerClick.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerClick(value){
        if (this.state.username !== ""){
            this.props.updateData("Content");
            saveData(this.state.username, "Username");
        } else alert ("Enter Username");
    }

    handlerChange(event){
        this.setState({username: event.target.value});
    }

    render() {
        return (
        <div>
            <Darkback />
            <div id="user" class="coll">
                <div class="userform">
                    <div class="form-group">
                        <input type="text" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User name" />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.handlerClick}>Submit</button>
                </div>
            </div> 
        </div>
        );
    }
}

export default Username;
