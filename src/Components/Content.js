import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Addcard from './Addcard';
import { getData } from '../functions/Functions';
import Cardlist from './Cardlist';
import Collname from './Collname';
import {winStateToggler} from '../Actions/Actions';

class Content extends React.Component {
    constructor () {
        super()

        this.handlerClick = this.handlerClick.bind(this)
        this.state = {addcardid : "jj"}
    }

    handlerClick(event){
        alert("fff" + event.target.id);
        this.setState({addcardid: event.target.id});
        this.winStateToggler();
    }
    
    winStateToggler = () => this.props.dispatch(winStateToggler(true));


    render() {
        // alert("kkk " + this.state.addcardid);
        return (
            <div class="text-center" id="content">
                <Collname tabid={this.props.tabid} colname={this.props.colname}/>
                <Cardlist tabid={this.props.tabid}/>
                <button type="submit" class="btn btn-primary" id={this.props.tabid} onClick={this.handlerClick}>Add Card</button>
                
                {this.props.winstate.addCardWinState === true && <Addcard tid={this.state.addcardid} />}
            </div> 
        );
    }
}

function mapStateToProps (state){
    return {
        tab: state.tab,
        winstate: state.winstate
    }
}

export default connect(mapStateToProps)(Content);
