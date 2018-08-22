import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Addcard from './Addcard';
import Cardlist from './Cardlist';
import Collname from './Collname';
import {winState} from '../reducers/winStateToggler';

class Content extends React.Component {
    constructor () {
        super()

        this.handlerClick = this.handlerClick.bind(this)
    }

    handlerClick(event){
        this.winState();
        this.setState({addcardid: event.target.id});
    }
    
    winState = () => this.props.dispatch(winState(true, this.props.tabid));

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
