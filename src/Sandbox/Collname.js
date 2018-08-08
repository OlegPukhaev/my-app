import React, { Component } from 'react';
import './App.css';
import { saveData } from './../functions/Functions';

class Changetitle extends React.Component {
    constructor (props) {
        super(props)

        this.state = {colltitle: ""}
        this.data = this.props.data
        this.handlerClick = this.handlerClick.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerClick(value){
        this.data.colname = this.state.colltitle; 
        saveData(this.data, this.props.table);
        this.props.updateData("hide");
    }

    handlerChange(event){
        
        this.setState({colltitle: event.target.value});
    }

    render () {
        return(
            <form class="userform">
                <div class="form-group">
                    <input type="text" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.props.title} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.handlerClick}>Submit</button>
            </form>
        );
    }
}

class Collname extends React.Component {
    constructor (props) {
        super(props)

        this.state = {formstate : "hide"}

        this.data = this.props.data
        this.handlerClick = this.handlerClick.bind(this)
    }

    handlerClick(value){
        this.setState({formstate : "show"});
    }

    updateData = (value) => {
        this.setState({ formstate: value });
    }

    render() {
        return (
            <div>
                <h1 onClick={this.handlerClick}>{this.data.colname}</h1>
                {this.state.formstate != "hide" && <Changetitle table={this.props.table} data={this.data} updateData={this.updateData}/>}
            </div>
        );
    }
}

export default Collname;