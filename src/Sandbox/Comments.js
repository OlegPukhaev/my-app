import React, { Component } from 'react';
import './App.css';
import {getData, saveData} from '../functions/Functions';

class Comments extends React.Component {
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
        var comment = {
            "comment" : this.state.commentValue,
            "autor": autor    
        };

        this.data.cards[this.id].comments.push(comment);
    }

    handlerChange (event) {
        this.setState({commentValue: event.target.value});
        // alert(this.state.commentValue);
    }

    render() {
        var listItems = this.data.cards[this.id].comments.map((item, index) =>
            <li key={item.title} id={index} value={index} onClick={this.handlerClick}>
                {item != "" && (<h3 id={index}>Автор комментария:</h3>)}
                {item != "" && (<p id={index}>{item}</p>)}
                <div id="newcomment">
            </div> 
            </li>
    
        );
        return (
            
            <div id="cardlist">
                {/* {this.state.showWin == "show" && <Cardinfo id={this.state.activeId} data={this.data} updateData={this.updateData}/>} */}
                <ul>
                    {listItems}
                    <form class="userform">
                        <div class="form-group">
                            <input type="text" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" placeholder="Add new comment" />
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={this.handlerClick}>Submit comment</button>
                    </form>
                </ul>

            </div> 
        );
    }
}

export default Comments;
