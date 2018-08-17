import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Addcard from './Addcard';
import { getData } from '../functions/Functions';
import Cardlist from './Cardlist';
import Collname from './Collname';
// import showWin from '../Actions/Actions'

class Content extends React.Component {
    constructor (props) {
        super (props)

        // this.data = this.props.data
        // this.data = getData(this.props.table);
        // this.state = {activeForm : "Hide"}
        this.handlerClick = this.handlerClick.bind(this)
    }

    // updateData = (value) => {
    //     this.setState({ activeForm: value });
    // }

    handlerClick(){
        this.setState({activeForm: "Show"});
    }

   
    
    render() {
        return (
            <div class="text-center" id="content">
                <Collname id={this.props.id} colname={this.props.colname}/>
                {/* <Cardlist data ={this.data} table={this.data.table}/> */}
            
                <button type="submit" class="btn btn-primary" onClick={this.showWin}>Add Card</button>
                {/* {this.props.showwin.activeForm === true && <Addcard data={this.data} />} */}
            </div> 
        );
    }

    // showWin = () => this.props.dispatch(showWin());
}

function mapStateToProps (state){
    return {
        // showwin: state.showwin,
        tab: state.tab
    }
}

// function mapDispatchToProps(dispatch){
//     return {
//         show: () => dispatch(showWin())
//     }
// }

export default connect(mapStateToProps)(Content);
