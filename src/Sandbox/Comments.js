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
                        newcomment : "",
                        editcomment: "hide"
        }

        this.eachComments = this.eachComments.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        this.onclickNewcomment = this.onclickNewcomment.bind(this)
        this.onclickDeletecomment = this.onclickDeletecomment.bind(this)
        this.onclickEditcomment = this.onclickEditcomment.bind(this)
        this.saveEditcomment = this.saveEditcomment.bind(this)
        this.onchangeEdit = this.onchangeEdit.bind(this)
    }

    onclickDeletecomment (event) {
        deleteData(this.comments, event.target.id);   
        this.setState ({
            testcomment : this.comments
        });
        saveData(this.data, this.props.table); 
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

    saveEditcomment (event) {
        // this.comments.push(commentval);
        var autor = getData("Username");
        this.comments[event.target.id].comment = this.state.newcomment;
        // alert(this.state.newcomment);
        this.comments.autor = autor;
        saveData(this.data, this.props.table);
        this.setState ({
            testcomment : this.comments
        });
        this.setState({editcomment: "hide"});
    } 

    onclickEditcomment (){
        this.setState({editcomment: "show"});
    } 

    onchangeEdit (event) {
        this.setState({newcomment: event.target.value});
        // alert(this.state.newcomment);
    }

    eachComments(item, i) {
        return (
            <li key={i} index={i} id={i}>
              <p>{item.autor} say: <br /></p>
                 <p onClick={this.onclickEditcomment}>{item.comment}</p>
                 {this.state.editcomment === "show" && <textarea id={i} onChange={this.onchangeEdit} class="form-control" aria-label="With textarea"></textarea>}
                 {this.state.editcomment === "show" && <button id={i} onClick={this.saveEditcomment}>Сохранить изменения</button>}
                 {this.state.editcomment !== "show" && <button id={i} onClick={this.onclickDeletecomment}>Remove comment</button>}
            </li>
        );
    }

    render() {
        return (
            <div id="cardlist">
                <ul>
                    {/* {listItems != null && listItems} */}
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
