import React from 'react';
import {connect} from 'react-redux';
import {changeComment, addComment, delComment} from '../reducers/CommentReducer';
import './App.css';
import { deleteData, saveData, getData} from '../functions/Functions';

class Comments extends React.Component {
    constructor (props) {
        super(props)

        this.state = {  
                        newcomment : "",
                        editcomment: null
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
			this.delComment(event.target.id);
    }

    handlerChange (event) {
				this.setState({newcomment : event.target.value});
    }

    onclickNewcomment () {
				var commentobj = {};
        if(this.state.newcomment !==""){  
							commentobj = {
									taskid : this.props.taskid,
									comment : this.state.newcomment,
									autor : this.props.username
								}   

								this.addComment(commentobj);
        }
    }

    changeComment = (value, id, username) => this.props.dispatch(changeComment(value, id, username));
    addComment = (value, username, tid) => this.props.dispatch(addComment(value, username, tid));
    delComment = (commid) => this.props.dispatch(delComment(commid));

    saveEditcomment (event) {
			if (this.state.newcomment !== ""){
				this.changeComment(this.state.newcomment, event.target.id, this.props.username);
				this.setState({editcomment: "hide"});
			} else this.setState({editcomment: "hide"});
    } 

    onclickEditcomment (event){
			this.setState({editcomment: event.target.id});
    } 

    onchangeEdit (event) {
			this.setState({newcomment: event.target.value});
    }

    eachComments(item, i) {
			if (item.taskid === this.props.taskid) {
				return (
						<div class="coll-12 bg-light rounded mt-1 p-2" key={i} index={i} id={i}>
						<p>{item.autor} say: <br /></p>
						<p id={i} onClick={this.onclickEditcomment}>{item.comment}</p>
						{this.state.editcomment == i && <textarea id={i} onChange={this.onchangeEdit} class="form-control mt-2" aria-label="With textarea"></textarea>}
						{this.state.editcomment == i ?
						<button id={i} class="mt-2" onClick={this.saveEditcomment}>Сохранить изменения</button>
						:
						<button class="btn btn-danger" id={i} onClick={this.onclickDeletecomment}>Remove comment</button>
					}
					</div>
					);
				}
		}

    render() {
			return (
				<div id="cardlist">
					<div class="coll-12">
							{this.props.comments.map(this.eachComments)}
					</div>
					<div>
							<input type="text" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" placeholder="Add new comment" />
							<button type="submit" class="btn btn-primary mt-1" onClick={this.onclickNewcomment}>Submit comment</button>
					</div>
				</div> 
			);
	}
}

function mapStateToProps (state){
	return {
		comments: state.storecomments.comments
	}
}

export default connect(mapStateToProps)(Comments);