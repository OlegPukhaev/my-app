import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Addcard from './Addcard';
import Cardlist from './Cardlist';
import Collname from './Collname';
import {winStateToggler} from '../Actions/Actions';

class Content extends React.Component {
    constructor () {
        super()

        this.handlerClick = this.handlerClick.bind(this)
    }

    handlerClick(event){
        this.winStateToggler();
        this.setState({addcardid: event.target.id});
    }
    
    winStateToggler = () => this.props.dispatch(winStateToggler(true, this.props.tabid));

    render() {
        return (
            <div class="text-center" id="content">
                <Collname tabid={this.props.tabid} colname={this.props.colname}/>
                <Cardlist tabid={this.props.tabid} colname={this.props.colname}/>
                <button type="submit" class="btn btn-primary" id={this.props.tabid} onClick={this.handlerClick}>Add Card</button>
                {this.props.winstate.addcardid === this.props.tabid && <Addcard username={this.props.username} tabid={this.props.tabid}/>}
            </div> 
        );
    }
}

function mapStateToProps (state){
    return {
        winstate: state.winstate
    }
}

export default connect(mapStateToProps)(Content);
