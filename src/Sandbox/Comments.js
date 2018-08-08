import React, { Component } from 'react';
import './App.css';

class Comments extends React.Component {
    constructor (props) {
        super(props)

        this.data = this.props.data
        this.id = this.props.id
        this.table = this.props.table
        this.handlerClick = this.handlerClick.bind(this)
    }

    handlerClick () {
        this.props.updateData("hide");
    }

    render() {
        var listItems = this.data.cards[this.id].comments.map((item, index) =>
            <li key={item.title} id={index} value={index} onClick={this.handlerClick}>
                {item != "" && (<h3 id={index}>Автор комментария:</h3>)}
                {item != "" && (<p id={index}>{item}</p>)}
            </li>
    
        );
        return (
            
            <div id="cardlist">
                {/* {this.state.showWin == "show" && <Cardinfo id={this.state.activeId} data={this.data} updateData={this.updateData}/>} */}
                <ul>
                    {listItems}
                </ul>
            </div> 
        );
    }
}

export default Comments;
