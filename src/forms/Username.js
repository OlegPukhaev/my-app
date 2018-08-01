import React, { Component } from 'react';
import SaveData from '.././functions/Functions.js';

class Username extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    // изменение состояни
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    // событие нажать кнопку submit
    handleSubmit(event) { 
        //alert('A name was submitted: ' + this.state.value);
        SaveData(this.state.value, "Username");
        event.preventDefault();
        // this.closeModal;
        //document.getElementsByClassName('modal').style.display = "none";        
    }

    // closeModal (vent){
    //     $('#exampleModal').modal('hide');
    // }

    render () {
      return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <input type="text" value={this.state.value} onChange={this.handleChange} class="form-control" id="InputUsername" aria-describedby="emailHelp" placeholder="Enter UserName" />
                </div>
                <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Submit</button>
            </form>
        </div>
      );
    }
}

export default Username;