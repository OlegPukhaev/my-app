import React from 'react';
import {connect} from 'react-redux';
import './App.css';
// import { saveData, getData } from './../functions/Functions';
import Darkback from './Darkback';
import {winStateToggler, addCard} from '../Actions/Actions';

class Addcard extends React.Component {
    constructor (props) {
        super(props)

        this.tabid = this.props.tabid
        this.state = {value: ""}
        this.handlerClick = this.handlerClick.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerClick(){
            var obj1 = {
                tabid: this.tabid,
                taskid: 7,
                title: this.state.value,
                desc:"",
                autor: this.props.username
            }
                
            if (this.state.value) {
                this.addCard(obj1);
                this.winStateToggler();
            } else this.winStateToggler();
    }

    handlerChange(event){
        this.setState({value: event.target.value});
    }

    winStateToggler = () => this.props.dispatch(winStateToggler(false));
    addCard = (value) => this.props.dispatch(addCard(value));

    render() {
        return (
            <div >
                <Darkback tabIndex="0" />
                    <div class="coll bg-lightgray" id="addcard">
                        {this.props.tabid}
                        <label for="exampleInputEmail1">Add Card Title</label>
                        <input type="text" onChange={this.handlerChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enterr card title" />
                        <button type="submit" class="btn btn-primary p-2" onClick={this.handlerClick}>Submit</button>
                    </div>
            </div> 
        );
    }
}

function mapStateToProps (state){
    return {
        winstate: state.winstate
    }
}

export default connect(mapStateToProps)(Addcard);
