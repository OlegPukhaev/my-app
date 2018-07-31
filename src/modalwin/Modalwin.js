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
                      <div class="modal-body">
                        ...
                      </div>
                  <ModalFooter modbutton = {this.modbut}/>{/*Футер модального окна с кнопками */}
                </div>
              </div>
            </div>
        );
    }
}

export default ModalWin;