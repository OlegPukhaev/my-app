import React, { Component } from 'react';
import {connect} from 'react-redux';
import addUser from './../Actions/Actions'; 
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

    addUser = () => this.props.dispatch(addUser(this.state.username));

    handlerClick(value){
        if (this.state.username !== ""){
            // this.props.updateData("Content");
            // saveData(this.state.username, "Username");
            this.addUser;
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
                        <input type="text" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName Here!" />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={this.addUser}>Submit</button>
                </div>
            </div> 
        </div>
        );
    }
}

function mapStateToProps (state){
    return {
        userprops: state.userprops
    }
}

export default connect(mapStateToProps)(Username);
