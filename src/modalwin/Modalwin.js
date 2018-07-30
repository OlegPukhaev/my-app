import React, { Component } from 'react';
// import './App.css';

class Header extends React.Component {
    render(){
        return (
            <h1>{this.title}</h1>
        );
    }
}

class ModalWin extends React.Component {
    render (){
        return (
            <div>
                <Header title="Заголовок Окна" />
                <p>Новое изменение</p>
            </div>
        );
    }
}


export default ModalWin;