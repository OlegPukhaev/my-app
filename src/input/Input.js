import React, { Component } from 'react';

class TextArea extends React.Component {
  state = {
    name: null
  }

    constructor () {
        super();

        
        this.clickHandler = this.clickHandler.bind(this);
        this.handlerChange = this.handlerChange.bind(this);
    }

    clickHandler () {
        alert('ffdfdfdf');
        this.props.updateData(this.state.name);
    }

    handlerChange (boardn) {
        // alert(boardn);
    }

    render () {
        // var collname = this.props.boardname;
        alert (this.props.boardname);
        return (
            <div>
                <form>
                    <div class="form-group">
                        {/* <textarea class="form-control" onBlur={() => { this.props.updateData(this.state.name)}}>{this.props.text}</textarea> */}
                        <textarea class="form-control" onBlur={this.clickHandler}>{this.props.text}</textarea>
                    </div>
                </form>
            </div>
        );
    }
}

export default TextArea