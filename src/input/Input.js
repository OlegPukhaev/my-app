import React, { Component } from 'react';

class TextArea extends React.Component {
    constructor () {
        super();

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler () {
        return null;
    }

    render () {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <textarea class="form-control" onBlur={this.clickHandler}>{this.props.text}</textarea>
                    </div>
                </form>
            </div>
        );
    }
}

export default TextArea