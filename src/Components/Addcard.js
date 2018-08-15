import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import { saveData, getData } from './../functions/Functions';
import addTodo from '../Actions/Actions'
import Darkback from './Darkback';

class Addcard extends React.Component {
    constructor (props) {
        super(props)
        
        this.data = this.props.data
        this.state = {value: ""}
        this.handlerClick = this.handlerClick.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerClick(){
            // var autor = getData("Username");
            var obj1 = {
                            "title": this.state.value,
                            "desc": null,
                            "comments" :[],
                            "autor": "Oleg"    
                        };
                
            this.props.updateData("hide");
            if (this.state.value) {
                this.data.cards.push(obj1);
                
                // saveData(this.props.data, this.props.table);
               addTodo();
            }

           
    }

    addTodo = () => this.data.add();

    handlerChange(event){
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div >
                <Darkback tabIndex="0" />
                    <div class="coll bg-lightgray" id="addcard">
                        <label for="exampleInputEmail1">Add Card Title</label>
                        <input type="text" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enterr card title" />
                        <button type="submit" class="btn btn-primary p-2" onClick={this.handlerClick}>Submit</button>
                    </div>
            </div> 
        );
    }


}

// function mapStateToProps (state){
//     return {
//         todos: state.todos
//     }
// }

function mapDispatchToProps(dispatch){
    return {
        add: () => dispatch(addTodo())
    }
}

export default connect(mapDispatchToProps)(Addcard);
