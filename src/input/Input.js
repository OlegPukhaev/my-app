import React, { Component } from 'react';
import { SaveData } from '../functions/Functions';

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
        this.props.updateData(this.state.name);
    }

    handlerChange (event) {
        // alert(this.props.cardobj.colname);
    //    this.props.cardobj.colname = event.target.value;

        //this.props.cardobj.push("In progress");

        
        this.props.cardobj.colname = "Lego";
        // this.props.cardobj.colname.push("Lemon");
        alert(this.props.cardobj.colname);
        //console.this.props.cardobj.colname;
        SaveData(this.props.cardobj , "tab2");
    }

    render () {
        // var collname = this.props.boardname;
        // alert (this.props.boardname);
        return (
            <div>
                <form>
                    <div class="form-group">
                        {/* <textarea class="form-control" onBlur={() => { this.props.updateData(this.state.name)}}>{this.props.text}</textarea> */}
                        <textarea class="form-control" onChange={this.handlerChange} onBlur={this.clickHandler}>{this.props.cardobj.colname}</textarea>
                    </div>
                </form>
            </div>
        );
    }
}

export default TextArea