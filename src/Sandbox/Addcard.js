import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// import ModalWin from './modalwin/Modalwin.js';

class Addcard extends React.Component {
    constructor (props) {
        super(props)

        this.handlerClick = this.handlerClick.bind(this)
    }

    handlerClick(){
        this.props.updateData("hide");
    }

    render() {
        return (
            <div id="addcard">
                <form class="userform">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Add Card Title</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add card title" />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.handlerClick}>Submit</button>
                </form>
            </div> 
        );
    }
}

export default Addcard;
