import React, { Component } from 'react';
import { SaveData } from '../functions/Functions';

class TextArea extends React.Component {
  state = {
    name: null
  }

    constructor (props) {
        super(props);

        // var collobject = this.props.cardobj;
        this.collobject = this.props.cardobj;

        this.clickHandler = this.clickHandler.bind(this);
        this.handlerChange = this.handlerChange.bind(this);
    }

    clickHandler () {
        this.props.updateData(this.state.name);
        // alert(this.collobject.colname);
        // alert(this.props.collid);
        SaveData(this.collobject , this.props.collid);
    }

    handlerChange (event) {
        this.collobject.colname = event.target.value;//Записываем в объект новое значение тайтла
    }

    render () {
        // var collname = this.props.boardname;
        var collobject = this.props.cardobj;
        return (
            <div>
                <form>
                    <div class="form-group">
                        {/* <textarea class="form-control" onBlur={() => { this.props.updateData(this.state.name)}}>{this.props.text}</textarea> */}
                        <textarea class="form-control" onChange={this.handlerChange} onBlur={this.clickHandler}>{this.collobject.colname}</textarea>
                    </div>
                </form>
            </div>
        );
    }
}

export default TextArea