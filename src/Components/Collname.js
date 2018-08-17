import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import { saveData } from './../functions/Functions';
import {showFormColname} from './../Actions/Actions'

class Changetitle extends React.Component {
    constructor (props) {
        super(props)

        this.state = {colltitle: ""}
        this.data = this.props.data
        this.handlerClick = this.handlerClick.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerClick(value){
        if (this.state.colltitle !== "") {            
            this.data.colname = this.state.colltitle; 
            // saveData(this.data, this.props.table);
            // this.props.updateData("hide");
        } else {
            // this.props.updateData("hide");
        }
    }

    showFormColname = () => this.props.dispatch(showFormColname(false));

    handlerChange(event){
        this.setState({colltitle: event.target.value});
    }


    render () {
        return(
            <form class="userform">
                <div class="form-group">
                    <input type="text" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.props.title} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.showFormColname}>Submit</button>
            </form>
        );
    }
}

class Collname extends React.Component {
    constructor (props) {
        super(props)

        // this.state = {formstate : "hide"}

        // this.data = this.props.data
    }

    showFormColname = () => this.props.dispatch(showFormColname(true));

    updateData = (value) => {
        this.setState({ formstate: value });
    }

    render() {
        return (
            <div class="text-center">
                <h3 onClick={this.showFormColname}>{this.props.colname}</h3>
                {this.props.tab.formstate === true && <Changetitle table={this.props.table} data={this.data} updateData={this.updateData}/>}
            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        tab: state.tab
    }
}

export default connect(mapStateToProps)(Collname);