import React, { Component } from 'react';
import './App.css';
import Cardinfo from './Cardinfo';

class Cardlist extends React.Component {
    constructor (props) {
        super(props)

        this.state = {showWin: "hide"}
        this.state = {activeId: null}
        this.data = this.props.data
        this.cards = this.data.cards
        this.handlerClick = this.handlerClick.bind(this)
        this.updateData = this.updateData.bind(this)
    }

    handlerClick (event){
        this.setState({showWin: "show"});
        this.setState({activeId: event.target.id});
        // alert(this.state.activeId)
    }

    updateData = (value) => {
        this.setState({ showWin: value });
    }

    render() {
        var listItems = this.cards.map((item, index) =>
            <li key={item.title} id={index} value={index} onClick={this.handlerClick}>
                <h3 id={index}>{item.title}</h3>
                <p id={index}>Comment: {item.comments.length}</p>
            </li>
    
        );
        return (
            
            <div id="cardlist">
            {/* {alert(this.activeId)} */}
                {this.state.showWin == "show" && <Cardinfo table={this.props.table} id={this.state.activeId} data={this.data} updateData={this.updateData}/>}
                <ul>
                    {listItems}
                </ul>
            </div> 
        );
    }
}

export default Cardlist;
