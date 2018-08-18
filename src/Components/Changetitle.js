import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import { saveData } from './../functions/Functions';
import {showFormColname, editColname} from './../Actions/Actions'

class Changetitle extends React.Component {
    constructor (props) {
        super(props)

        this.state = {colltitle: ""}
        // this.data = this.props.data
        this.handlerClick = this.handlerClick.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerClick(){
        // alert(this.state.colltitle);
        if (this.state.colltitle !== ""){
            this.editColname(this.state.colltitle, this.props.id)
            this.showFormColname(false);
        } else this.showFormColname(false);
    }

    showFormColname = (value) => this.props.dispatch(showFormColname(value));

    editColname = (value, id) => this.props.dispatch(editColname(value, id));

    handlerChange(event){
        this.setState({colltitle: event.target.value});
    }


    render () {
        // alert(this.props.tab.formstate);
        return(
            <div class="userform">
                <div class="form-group">
                    <input type="text" onChange={this.handlerChange} class="form-control" id="tab1" aria-describedby="emailHelp" placeholder={this.props.colname} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.handlerClick}>Submit</button>
            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        tab: state.tab
    }
}

export default connect(mapStateToProps)(Changetitle);