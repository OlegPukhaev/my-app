import React, { Component } from 'react';
import './App.css';
import Comments from './Comments';
import { deleteData, saveData, getData } from '../functions/Functions';

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
        saveData(this.data, this.props.table);
    }
    
    removeDesc (){
        this.setState({desc: ""});
        this.data.cards[this.id].desc = "";
        saveData(this.data, this.props.table);
    }

    handleKeyDown (event){

            if (event.key === "Enter") {
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
            }
      }

      show (event) {
          {event.target.id === "title" && this.setState({showEditTitle: "show"})};
          {event.target.id === "desc" && this.setState({showEditDesc: "show"})};
      }

    render() {
        return (
            <div id="cardinfo" onKeyDown={this.handleKeyDown}>
                <button onClick={this.handlerClick}>Close</button>
                <button onClick={this.onclickDelete}>Delete Card</button>
               
                <h5 id="title" onClick={this.show}>Title: {this.state.title}</h5>
                {this.state.showEditTitle === "show" && <input id="title" type="text" onKeyDown={this.handleKeyDown} onChange={this.onChangeHandler}/>}
                <p>from <b>{this.data.colname}</b></p>
               
                <p id="desc" onClick={this.show}>Description:{this.state.desc}</p><button onClick={this.removeDesc}>Remove Description</button>
                {this.state.showEditDesc === "show" && <input type="text" id="desc" onChange={this.onChangeHandler}/>}
               
                 <p>Autor: {this.data.cards[this.id].autor}</p>
               
                 <Comments comments={this.data.cards[this.id].comments} data={this.data} table={this.props.table} id={this.id}/>
            </div> 
        );
    }
}

export default Cardinfo;    
