import React, { Component } from 'react';
import '../../src/bootstrap.css';
import '../../src/style.css';
// import getCards from '.././functions/Functions.js';

class Navigation extends React.Component {

    getCards(localkey) {//Возвращает объект карточки по ключу localkey в localstorage
        const returnObj = JSON.parse(localStorage.getItem(localkey));
      return returnObj;
    }

    render () {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a id="navusername" class="navbar-brand" href="#">User: {this.getCards('Username')}</a>
            </nav>
        );
    }
}

export default Navigation;