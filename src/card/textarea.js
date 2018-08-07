import React, { Component } from 'react';
import {SaveData, getCards} from './../functions/Functions.js';


class TextArea extends React.Component {
  state = {
    name: null
  }

    constructor (props) {
        super(props);

        // var collobject = this.props.cardobj;
        this.collobject = getCards(this.props.collid);
        // this.objpath = this.props.objpath;

        this.clickHandler = this.clickHandler.bind(this);
        this.handlerChange = this.handlerChange.bind(this);
    }

    clickHandler () {
        this.props.updateData(this.state.name);
        // alert(this.collobject);
        // alert(this.props.collid);
        SaveData(this.collobject , this.props.collid);
    }

    handlerChange (event) {
        var elemno = this.props.itemid;
        // alert(this.collobject.colname);
        this.collobject.cards[elemno].title = event.target.value;//Записываем в объект новое значение тайтла
    }

    render () {
        return (
            <div>
                <form>
                    <div class="form-group">
                        {/* <textarea class="form-control" onBlur={() => { this.props.updateData(this.state.name)}}>{this.props.text}</textarea> */}
                        <textarea class="form-control" onChange={this.handlerChange} onBlur={this.clickHandler}>{this.collobject.cards[0].title}</textarea>
                    </div>
                </form>
            </div>
        );
    }
}

export default TextArea