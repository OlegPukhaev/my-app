import React, { Component } from 'react';
import './App.css';
import {getData, saveData} from '../functions/Functions';

class Addcomment extends React.Component {
    constructor (props) {
        super(props)

        this.state = {commentValue: ""}
        this.data = this.props.data
        this.id = this.props.id
        this.table = this.props.table
        this.handlerClick = this.handlerClick.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerClick () {
        // this.props.updateData("hide");
        var autor = getData("Username");
        var commentval = {
            "comment" : this.state.commentValue,
            "autor": autor    
        };
        // alert(this.state.commentValue);
        this.props.data.cards[this.id].comments.push(commentval);
        saveData(this.props.data, this.table);
        // alert(this.state.commentValue);
    }

    handlerChange (event) {
        this.setState({commentValue: event.target.value});
    }

    render() {
        return (
                    <div>
                        <input type="text" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" placeholder="Add new comment" />
                        <button type="submit" class="btn btn-primary" onClick={this.handlerClick}>Submit comment</button>
                    </div>
        );
    }
}

export default Addcomment;
