import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Comments from './Comments';
import {delCard, changeTitle, changeDesc, removeDesc} from '../Actions/Actions';
import { deleteData, saveData, getData } from '../functions/Functions';
import Darkback from './Darkback';

class Cardinfo extends React.Component {
    constructor (props) {
        super(props)

        // this.data = this.props.data
        // this.data = this.props.data
        // this.cardid = this.props.cardid
        // this.id = this.props.id
        this.state =    { 
                            // title : this.data.cards[this.id].title,
                            showEditTitle : "hide",
                            // desc : this.data.cards[this.id].desc,
                            showEditDesc : "hide",
                            tmptext: ""
                        }
        this.handlerClick = this.handlerClick.bind(this)
        this.onclickDelete = this.onclickDelete.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onChangedesc = this.onChangedesc.bind(this)
        // this.onclickSave = this.onclickSave.bind(this)
        // this.removeDesc = this.removeDesc.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.show = this.show.bind(this)
        this.keyBoardevent = this.keyBoardevent.bind(this)
    }

    handlerClick () {
        this.props.updateData("hide");
    }

    delCard = (value) => this.props.dispatch(delCard(value));

    onclickDelete () {
        this.delCard(this.props.cardid);
        this.props.updateData("hide");
    }

    onChangeHandler (event){
        this.setState({tmptext : event.target.value});
    }
    
    onChangedesc (event){
        this.setState({desc : event.target.value});
    }
    
    // onclickSave (event){
    //     switch (event.target.id) {
    //         case "title":
    //             this.data.cards[this.id].title = this.state.title;
    //         break;
    //         case "desc":
    //         this.data.cards[this.id].desc = this.state.desc;
    //         break;
    //     } 
    // }
    
    changeTitle = (value, id) => this.props.dispatch(changeTitle(value, id));
    changeDesc = (value, id) => this.props.dispatch(changeDesc(value, id));
    removeDesc = () => this.props.dispatch(removeDesc(this.props.cardid));

    // removeDesc (){
    //     // this.setState({desc: ""});
    //     // this.data.cards[this.id].desc = "";
    //     // saveData(this.data, this.props.table);
    //     this.removeDesc(this.props.cardid);
    // }

    handleKeyDown (event){
            if ((event.key === "Enter") && (this.state.tmptext !== "")) {
                    switch (event.target.id) {
                        case "title":
                            this.changeTitle(this.state.tmptext, this.props.cardid );
                            this.setState({showEditTitle: "hide"});
                        break;
                        case "desc":
                            this.changeDesc(this.state.tmptext, this.props.cardid );

                            // this.setState({desc: this.state.tmptext});
                            // this.data.cards[this.id].desc = this.state.tmptext;
                            this.setState({showEditDesc: "hide"});
                        break;
                    } 
                    saveData(this.data, this.props.table);   
            }
      } 

      show (event) {
          switch (event.target.id){
              case "title": 
                this.setState({showEditTitle: "show"});
              break;
              case "desc":
                this.setState({showEditDesc: "show"});
              break;
          }
      }
      
	keyBoardevent (event){
			{event.key === "Escape" && this.props.updateData("hide");}
	}

    render() {
			return (
				<div tabIndex="0" >
					<Darkback tabIndex="0" />
					<div class="bg-light" id="cardinfo" class="border border-primary" tabIndex="0" onKeyDown={this.keyBoardevent}>
					
					<button type="button" class="close" aria-label="Close" onClick={this.handlerClick}>
							<span aria-hidden="true">&times;</span>
					</button>
					
					<h5 class="mt-5 bg-light rounded py-3 " id="title" onClick={this.show}>Title: {this.props.card[this.props.cardid].title}</h5>
					{this.state.showEditTitle === "show" && <input id="title" type="text" onKeyDown={this.handleKeyDown} onChange={this.onChangeHandler} class="form-control"/>}
					<p>from <b>{this.props.colname}</b></p>
			
					<h6 id="desc" class="bg-light rounded py-3" onClick={this.show}>Description: {this.props.card[this.props.cardid].desc}</h6>
													
	
					{this.state.showEditDesc === "show" ? (
							<input type="text" id="desc" onChange={this.onChangeHandler} onKeyDown={this.handleKeyDown}  class="form-control"/>) 
							: 
							(<button class="btn btn-danger mt-2" onClick={this.removeDesc}>Remove Description</button>)
					}

					<p>Autor: {this.props.card[this.props.cardid].autor}</p>
			
					<h5> Комментарии </h5>

					{console.log(this.props.card[this.props.cardid].taskid)}     
					<Comments taskid={this.props.card[this.props.cardid].taskid}/>
			
					<button class="btn btn-danger mt-1" onClick={this.onclickDelete}>Delete Card</button>
					<button type="button" class="btn btn-primary mt-1 ml-3" aria-label="Close" onClick={this.handlerClick}>
								Close window
					</button>
					</div> 
			</div>
		);
	}
}

function mapStateToProps (state){
	return {
		// userprops: state.userprops,
		card: state.cards.card
	}
}

export default connect(mapStateToProps)(Cardinfo);    
