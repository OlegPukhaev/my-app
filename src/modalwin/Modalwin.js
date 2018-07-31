import React, { Component } from 'react';

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
  render () {
    return (
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">{this.props.modbutton}</button>
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
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">@</span>
            </div>
            <input type="text" class="form-control" placeholder="Имя пользователя" aria-label="Имя пользователя" aria-describedby="basic-addon1" />
          </div>
      </div>
    );
  }
}

class ModalWin extends React.Component {

    constructor () {
      super();
      this.title = "Окно по умолчанию"; 
      this.modbut = "Sign In";
    }

  

    render (){
        return (
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <ModalHeader title={this.title} />{/*Заголовок модального окна */}
                    <ModalContent />
                    <ModalFooter modbutton = {this.modbut}/>{/*Футер модального окна с кнопками */}
                </div>
              </div>
            </div>
        );
    }
}

export default ModalWin;