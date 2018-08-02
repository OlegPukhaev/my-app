import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import '../../src/bootstrap.css';
// import '../../src/style.css';
import TextArea from '.././input/Input.js';

// Карточка с заданием
class Card extends React.Component {
    constructor(props) {
        super(props);

        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick (event) {
        // alert("id"+event.target.id);
        ReactDOM.render(
            <TextArea />, document.getElementById(event.target.id)
        );
    }

    render () {
        return (
            <div class="card mt-1" >
                <div class="card-body">
                    <p class="card-title cardstyle" id={this.props.mykey} onClick={this.handlerClick}>{this.props.title} + {this.props.mykey}</p>
                    <a href="#" class="card-link">Comments 0</a>
                </div>
            </div>
        );
    }
}

export default Card;