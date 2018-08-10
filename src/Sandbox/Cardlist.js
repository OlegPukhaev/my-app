import React, { Component } from 'react';
import './App.css';
import Cardinfo from './Cardinfo';
// import {getData} from '../functions'

class Cardlist extends React.Component {
    constructor (props) {
        super(props)

        this.state = {showWin: "hide"}
        this.state = {activeId: null}
        this.data = this.props.data;
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
            <div class="col-12 bg-light rounded" key={item.title} id={index} value={index} onClick={this.handlerClick}>
                <h6 id={index}>{item.title}</h6>
                {item.comments != null && (<p id={index}>Comment: {item.comments.length}</p>)}
            </div>
    
        );
        return (
            
            <div id="cardlist">
            {/* {alert(this.activeId)} */}
                {this.state.showWin === "show" && <Cardinfo table={this.props.table} data={this.data} id={this.state.activeId} updateData={this.updateData}/>}
                <div class="col-12">
                    {listItems}
                </div>
            </div> 
        );
    }
}

export default Cardlist;
