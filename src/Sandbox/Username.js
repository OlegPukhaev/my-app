import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// import ModalWin from './modalwin/Modalwin.js';

class Username extends React.Component {
    constructor (props) {
        super(props)

        this.handlerClick = this.handlerClick.bind(this)
    }

    handlerClick(){
        this.props.updateData("Content");
        // alert(this.target.value);    
    }

    render() {
        return (
            <div id="user">
                <form class="userform">
                    <div class="form-group">
                        <label htmlFor="exampleInputEmail1">Enter Username</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.handlerClick}>Submit</button>
                </form>
            </div> 
        );
    }
}

export default Username;
