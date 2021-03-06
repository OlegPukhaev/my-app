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
        if(this.state.newcomment !==""){        
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
    }

    saveEditcomment (event) {
        if (this.state.newcomment !== ""){
            var autor = getData("Username");
            this.comments[event.target.id].comment = this.state.newcomment;
            this.comments.autor = autor;
            saveData(this.data, this.props.table);
            this.setState ({
                testcomment : this.comments
            });
            this.setState({editcomment: "hide"});
        } else this.setState({editcomment: "hide"});
    } 

    onclickEditcomment (){
        this.setState({editcomment: "show"});
    } 

    onchangeEdit (event) {
        this.setState({newcomment: event.target.value});
    }


    eachComments(item, i) {
        return (
            <div class="coll-12 bg-light rounded mt-1 p-2" key={i} index={i} id={i}>
              <p>{item.autor} say: <br /></p>
                 <p onClick={this.onclickEditcomment}>{item.comment}</p>
                 {this.state.editcomment === "show" && <textarea id={i} onChange={this.onchangeEdit} class="form-control mt-2" aria-label="With textarea"></textarea>}
                 {this.state.editcomment === "show" ?
                    <button id={i} class="mt-2" onClick={this.saveEditcomment}>Сохранить изменения</button>
                    :
                    <button class="btn btn-danger" id={i} onClick={this.onclickDeletecomment}>Remove comment</button>
                }
            </div>
        );
    }

    render() {
        return (
            <div id="cardlist">
                <div class="coll-12">
                    {this.state.testcomment.map(this.eachComments)}
                </div>
                    <div>
                        <input type="text" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" placeholder="Add new comment" />
                        <button type="submit" class="btn btn-primary mt-1" onClick={this.onclickNewcomment}>Submit comment</button>
                    </div>
            </div> 
        );
    }
}

export default Comments;