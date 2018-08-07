import React, { Component } from 'react';
import TextArea from './textarea.js';
import {getCards} from './../functions/Functions.js';

// Карточка с заданием
class Card extends React.Component {
    constructor(props) {
        super(props);

        this.cardobj = getCards(this.props.collid);
        alert(this.cardobj.colname + "fv " + this.cardobj.cards[0].title);
        this.state = {activeId: null};
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick (event) {
        // alert("id"+event.target.id);
        this.setState({activeId: event.target.id})
    }

    updateData = (value) => {
        this.setState({ activeId: value });
     }

    render () {
        // alert(props.colid);
        // var cards111 = g
        return (
            <div class="card mt-1" >
                <div class="card-body">
                    <p class="card-title cardstyle" id={this.props.mykey} onClick={this.handlerClick}>{this.cardobj.cards[this.props.mykey].title}</p>
                    {this.state.activeId == this.props.mykey &&    
                                        
                        <TextArea 
                            // boardname={"Pukhaev"}
                            cardobj={this.cardobj}
                            collid={this.props.collid}
                            title={this.props.title}
                            updateData={this.updateData}
                            itemid={this.props.mykey}
                        />
                    }
                    {/* {alert(this.props.mykey)} */}
                    <a href="#" class="card-link">Comments {this.props.comments}</a>
                </div>
            </div>
        );
    }
}


export default Card;