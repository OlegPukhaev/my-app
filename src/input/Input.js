import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Cards from '.././card/Cards.js';

class TextArea extends React.Component {
    constructor () {
        super();

        
    }

    render () {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <textarea class="form-control" id="textaria">{this.props.text}</textarea>
                    </div>
                </form>
            </div>
        );
    }
}

export default TextArea