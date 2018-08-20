import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import { saveData, getData } from './../functions/Functions';
import Darkback from './Darkback';
import {winStateToggler, addCard} from '../Actions/Actions';

class Addcard extends React.Component {
    constructor (props) {
        super(props)
        // alert(this.props.tid);
        // this.data = this.props.data
        this.state = {value: ""}
        this.handlerClick = this.handlerClick.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerClick(event){
            // var autor = getData("Username");
            // alert(this.props.tid);
            var obj1 = {
                tabid: this.props.tid,
                taskid:7,
                title: this.state.value,
                desc:"Рубкхадлодыо адыоадлыо доыа дыфоадло дфлыоадыфо ",
                autor:"Неизвестная Личность"
            }
                
            // this.props.updateData("hide");
            if (this.state.value) {
                // alert(this.state.value);
                // this.data.cards.push(obj1);
                this.addCard(obj1);
                this.winStateToggler();

                // saveData(this.props.data, this.props.table);
            //    addTodo();
            }
    }

    // addTodo = () => this.data.add();

    handlerChange(event){
        this.setState({value: event.target.value});
    }

    winStateToggler = (value) => this.props.dispatch(winStateToggler(value));
    addCard = (value) => this.props.dispatch(addCard(value));

    render() {
        return (
            <div >
                <Darkback tabIndex="0" />
                    <div class="coll bg-lightgray" id="addcard">
                        <label for="exampleInputEmail1">Add Card Title</label>
                        <input type="text" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enterr card title" />
                        <button type="submit" class="btn btn-primary p-2"  onClick={this.handlerClick}>Submit</button>
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
