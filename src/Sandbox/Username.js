import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { saveData } from '../functions/Functions';

// import ModalWin from './modalwin/Modalwin.js';

class Username extends React.Component {
    constructor (props) {
        super(props)

        this.state = {username : "User"}
        this.handlerClick = this.handlerClick.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerClick(value){
        this.props.updateData("Content");
        // alert(this.target.value);   
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
                        <label htmlFor="exampleInputEmail1">Enter Username</label>
                        <input type="email" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.handlerClick}>Submit</button>
                </form>
            </div> 
        );
    }
}

export default Username;
