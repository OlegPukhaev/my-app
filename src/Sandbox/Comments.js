import React, { Component } from 'react';
import './App.css';
import { deleteData, saveData, getData} from '../functions/Functions';

class Comments extends React.Component {
    constructor (props) {
        super(props)

        this.data = this.props.data
        this.id = this.props.id
        this.table = this.props.table
        this.comments = this.props.comments

        this.state = {  testcomment : this.comments,
                        newcomment : ""
        }

        this.eachComments = this.eachComments.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        this.onclickNewcomment = this.onclickNewcomment.bind(this)
        this.onclickDeletecomment = this.onclickDeletecomment.bind(this)
    }

    onclickDeletecomment (event) {
        deleteData(this.comments, event.target.id);   
        this.setState ({
            testcomment : this.comments
        });
        saveData(this.data, this.props.table); 
    }

    eachComments(item, i) {
        return (
            <li key={i} index={i} id={i}>
              <p>{item.autor} say: <br />
                 {item.comment}</p>
                 <button id={i} onClick={this.onclickDeletecomment}>Remove comment</button>
            </li>
        );
    }

    handlerChange (event) {
        this.setState({newcomment : event.target.value});
    }

    onclickNewcomment () {
        var autor = getData("Username");
        var commentval = {
            "comment" : this.state.newcomment,
            "autor": autor    
        };
        this.comments.push(commentval);
        saveData(this.data, this.props.table);
        this.setState ({
            testcomment : this.comments
        });
    }

    render() {
        return (
            <div id="cardlist">
                <ul>
                    {this.state.testcomment.map (this.eachComments)}
                </ul>
                    <div>
                        <input type="text" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" placeholder="Add new comment" />
                        <button type="submit" class="btn btn-primary" onClick={this.onclickNewcomment}>Submit comment</button>
                    </div>
            </div> 
        );
    }
}

export default Comments;
