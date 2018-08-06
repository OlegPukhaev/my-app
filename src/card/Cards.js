import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import '../../src/bootstrap.css';
// import '../../src/style.css';
import TextArea from '.././input/Input.js';


// Карточка с заданием
class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {activeId: null};
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick (event) {
        // alert("id"+event.target.id);
        this.setState({activeId: event.target.id})
    }

    render () {
        return (
            <div class="card mt-1" >
                <div class="card-body">
                    <p class="card-title cardstyle" id={this.props.mykey} onClick={this.handlerClick}>{this.props.title}</p>
                    {this.state.activeId == this.props.mykey && <TextArea />}
                    <a href="#" class="card-link">Comments {this.props.comments}</a>
                </div>
            </div>
        );
    }
}


export default Card;