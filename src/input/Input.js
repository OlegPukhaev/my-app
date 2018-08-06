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
        alert(this.props.cardobj.colname);
        alert(this.props.cardobj.colname);
        // SaveData(obj1 , "tab1");
    }

    handlerChange (event) {
        // alert(this.props.cardobj.colname);
    //    this.props.cardobj.colname = event.target.value;

        // this.props.cardobj.colname = "Lego";
        // var obj1 = {
        //                 "colname" : "Lego", 
        //                 "cards": [
        //                         {
        //                             "title":"Give Me some money",
        //                             "desc":"",
        //                             "comments" :["Cool","Bad", "Cool"]
        //                         }
        //                     ]
        //             };

        this.props.cardobj.colname = event.target.value;
        // alert(this.props.cardobj.colname);
        
        //SaveData(obj1 , "tab1");
    }

    render () {
        // var collname = this.props.boardname;
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