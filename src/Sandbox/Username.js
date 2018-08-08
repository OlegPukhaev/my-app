import React, { Component } from 'react';
import './App.css';
import { saveData } from '../functions/Functions';

class Username extends React.Component {
    constructor (props) {
        super(props)

        this.state = {username : "User"}
        this.handlerClick = this.handlerClick.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerClick(value){
        this.props.updateData("Content");
        saveData(this.state.username, "Username");
    }

    handlerChange(event){
        this.setState({username: event.target.value});
    }

    render() {
        return (
            <div id="user">
                <form class="userform">
                    <div class="form-group">
                        <input type="text" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User name" />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.handlerClick}>Submit</button>
                </form>
            </div> 
        );
    }
}

export default Username;
