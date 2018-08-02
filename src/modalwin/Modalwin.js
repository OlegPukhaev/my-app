import React, { Component } from 'react';
import Button from '.././buttons/Buttons.js';
import Username from '.././forms/Username.js';

{/*Заголовок модального окна */}
class ModalHeader extends React.Component {
  render () {
    return (
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{this.props.title}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
    </div>
    );
  }
}

{/*Футер модального окна с кнопками */}
class ModalFooter extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)//обозначаем bind(this) чтобы в будущем не писать в кнопках и т.д.
    this.state = {counter : 0} //Устанавливаем счетчик кликов
  }

  handleClick () { //Счетчик кликов, наращиваем клики
    this.setState ({counter: ++this.state.counter})
  }

  render () {
    return (
      <div class="modal-footer">
        {/* <Text counter = {this.state.counter}/>  */}
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <Button 
          // counter = {this.state.counter}  
          handler = {this.handleClick}
          name = {this.props.modbut}

        />
    </div>
    );
  }
}

{/*Область контента модального окна*/}
class ModalContent extends React.Component {
  render () {
    return (
      <div class="modal-body">
          <div class="input-group mb-3">
            <Username />
            {/* <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">@</span>
            </div>
            <input type="text" class="form-control" placeholder="Имя пользователя" aria-label="Имя пользователя" aria-describedby="basic-addon1" /> */}
          </div>
      </div>
    );
  }
}

class ModalWin extends React.Component {

    constructor () {
      super();
      this.title = "Введите Имя пользователя"; 
      // this.modbut = "Sign In";
    }

    render (){
        return (
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <ModalHeader title={this.title} />{/*Заголовок модального окна */}
                    <ModalContent />
                    {/* <ModalFooter /> */}
                </div>
              </div>
            </div>
        );
    }
}

export default ModalWin;