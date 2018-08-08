import React, { Component } from 'react';
import './App.css';
import Addcard from './Addcard';
import { getData } from '../functions/Functions';
import Cardlist from './Cardlist';
import Collname from './Collname';

class Content extends React.Component {
    constructor (props) {
        super (props)

        this.data = getData(this.props.table);
        this.state = {activeForm : "Hide"}
        this.handlerClick = this.handlerClick.bind(this)
    }

    updateData = (value) => {
        this.setState({ activeForm: value });
    }

    handlerClick(){
        this.setState({activeForm: "Show"});
    }

    render() {
        return (
            <div id="content">
                <Collname data={this.data} table={this.props.table}/>
                <Cardlist data={this.data} table={this.props.table}/>
            
                <button type="submit" class="btn btn-primary" onClick={this.handlerClick}>Add Card</button>
                {this.state.activeForm == "Show" && <Addcard table={this.props.table} data={this.data} updateData={this.updateData}/>}
            </div> 
        );
    }
}

export default Content;
