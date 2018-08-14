import React, { Component } from 'react';
import './App.css';
import Comments from './Comments';
import { deleteData, saveData, getData } from '../functions/Functions';
import Darkback from './Darkback';

class Cardinfo extends React.Component {
    constructor (props) {
        super(props)

        // this.data = this.props.data
        this.data = this.props.data
        this.id = this.props.id
        this.state =    { 
                            title : this.data.cards[this.id].title,
                            showEditTitle : "hide",
                            desc : this.data.cards[this.id].desc,
                            showEditDesc : "hide",
                            tmptext: ""
                        }
        this.handlerClick = this.handlerClick.bind(this)
        this.onclickDelete = this.onclickDelete.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onChangedesc = this.onChangedesc.bind(this)
        this.onclickSave = this.onclickSave.bind(this)
        this.removeDesc = this.removeDesc.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.show = this.show.bind(this)
        this.keyBoardevent = this.keyBoardevent.bind(this)
    }

    handlerClick () {
        this.props.updateData("hide");
    }

    onclickDelete () {
        deleteData (this.data.cards, this.id);
        saveData(this.data, this.props.table);
        this.props.updateData("hide");
    }

    

    onChangeHandler (event){
        this.setState({tmptext : event.target.value});
    }
    
    onChangedesc (event){
        this.setState({desc : event.target.value});
    }
    
    onclickSave (event){
        // alert(event.target.id);
        {event.target.id === "title"  && (this.data.cards[this.id].title = this.state.title)}
        {event.target.id === "desc"  && (this.data.cards[this.id].desc = this.state.desc)}
        // alert(this.id + "->" + obj.cards[this.id].title + "->" + this.state.title);
        // saveData(this.data, this.props.table);
    }
    
    removeDesc (){
        this.setState({desc: ""});
        this.data.cards[this.id].desc = "";
        saveData(this.data, this.props.table);
    }

    handleKeyDown (event){

            if ((event.key === "Enter") && (this.state.tmptext !== "")) {
                    {event.target.id === "title"  && (
                            this.setState({title: this.state.tmptext}),
                            this.data.cards[this.id].title = this.state.tmptext,
                            this.setState({showEditTitle: "hide"})
                        );
                    }
                    {event.target.id === "desc"  && (
                            this.setState({desc: this.state.tmptext}),
                            this.data.cards[this.id].desc = this.state.tmptext,
                            this.setState({showEditDesc: "hide"})
                        );
                    }
                    saveData(this.data, this.props.table);   
            } else {
                        // this.setState({showEditTitle: "hide"});
                    }

      } 
      show (event) {
          {event.target.id === "title" && this.setState({showEditTitle: "show"})};
          {event.target.id === "desc" && this.setState({showEditDesc: "show"})};
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

                    
                
                    <h5 class="mt-5 bg-light rounded py-3 " id="title" onClick={this.show}>Title: {this.state.title}</h5>
                    {this.state.showEditTitle === "show" && <input id="title" type="text" onKeyDown={this.handleKeyDown} onChange={this.onChangeHandler} class="form-control"/>}
                    <p>from <b>{this.data.colname}</b></p>
                
                    <h6 id="desc" class="bg-light rounded py-3" onClick={this.show}>Description: {this.state.desc}</h6>
                    {this.state.showEditDesc === "show" && <input type="text" id="desc" onChange={this.onChangeHandler} onKeyDown={this.handleKeyDown}  class="form-control"/>}
                    {this.state.showEditDesc !== "show" && <button class="btn btn-danger mt-2" onClick={this.removeDesc}>Remove Description</button>}

                    <p>Autor: {this.data.cards[this.id].autor}</p>
                
                    <h5> Комментарии </h5>
                    <Comments comments={this.data.cards[this.id].comments} data={this.data} table={this.props.table} id={this.id}/>
                    <button class="btn btn-danger mt-1" onClick={this.onclickDelete}>Delete Card</button>
                    <button type="button" class="btn btn-primary mt-1 ml-3" aria-label="Close" onClick={this.handlerClick}>
                         Close window
                    </button>
                </div> 
            </div>
        );
    }
}

export default Cardinfo;    
