import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Addcard from './Addcard';
import { getData } from '../functions/Functions';
import Cardlist from './Cardlist';
import Collname from './Collname';

class Content extends React.Component {
    // constructor () {
        

    //     // this.handlerClick = this.handlerClick.bind(this)
    // }

    // handlerClick(){
    //     this.setState({activeForm: "Show"});
    // }
    
    render() {
        return (
            <div class="text-center" id="content">
            
                <Collname id={this.props.id} colname={this.props.colname}/>
                <Cardlist />
            
                <button type="submit" class="btn btn-primary" onClick={this.showWin}>Add Card</button>
                {/* {this.props.showwin.activeForm === true && <Addcard data={this.data} />} */}
            </div> 
        );
    }
}

function mapStateToProps (state){
    return {
        tab: state.tab
    }
}

export default connect(mapStateToProps)(Content);
