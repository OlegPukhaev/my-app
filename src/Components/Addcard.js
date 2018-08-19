import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import { saveData, getData } from './../functions/Functions';
import Darkback from './Darkback';
import {winStateToggler} from '../Actions/Actions';

class Addcard extends React.Component {
    constructor (props) {
        super(props)
        
        // this.data = this.props.data
        this.state = {value: ""}
        // this.handlerClick = this.handlerClick.bind(this)
        // this.handlerChange = this.handlerChange.bind(this)
    }

    // handlerClick(){
    //         // var autor = getData("Username");
    //         var obj1 = {
    //                         "title": this.state.value,
    //                         "desc": null,
    //                         "comments" :[],
    //                         "autor": "Oleg"    
    //                     };
                
    //         this.props.updateData("hide");
    //         if (this.state.value) {
    //             // this.data.cards.push(obj1);
                
    //             // saveData(this.props.data, this.props.table);
    //         //    addTodo();
    //         }

           
    // }

    // addTodo = () => this.data.add();

    // handlerChange(event){
    //     this.setState({value: event.target.value});
    // }

    winStateToggler = () => this.props.dispatch(winStateToggler(false));

    render() {
        return (
            <div >
                <Darkback tabIndex="0" />
                    <div class="coll bg-lightgray" id="addcard">
                        <label for="exampleInputEmail1">Add Card Title</label>
                        <input type="text" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enterr card title" />
                        <button type="submit" class="btn btn-primary p-2" onClick={this.winStateToggler}>Submit</button>
                    </div>
            </div> 
        );
    }


}

function mapStateToProps (state){
    return {
        tab: state.tab,
        winstate: state.winstate,
        cards: state.cards
    }
}

// function mapDispatchToProps(dispatch){
//     return {
//         add: () => dispatch(addTodo())
//     }
// }

export default connect(mapStateToProps)(Addcard);
