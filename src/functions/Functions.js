import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import './App.css';

function SaveData(saveobj, localkey){//сохраняем объект карточки saveobj, в localstorage по ключу localkey
    const serialObj = JSON.stringify(saveobj); //сериализуем его
    localStorage.setItem(localkey, serialObj); //запишем его в хранилище по ключу "localkey"
}

function getCards(localkey) {//Возвращает объект карточки по ключу localkey в localstorage
    const returnObj = JSON.parse(localStorage.getItem(localkey));
  return returnObj;
}

function Cardstitle(props){//возвращает заголовок карточки
  return <h5>{props.title}</h5>
}

function Carditem(props){//возвращает содержимое карточки
    return (
      <p>{props.item}</p>
    );
}

function CardsList(props) {//Возвращает список карточек
  const cards = props.cards;
  const listItems = cards.map((number) =>
      <li class="cards" key={number.toString()}>
        {number}
      </li>

  );
  return (
    <ul class="Cardscoll">{listItems}</ul>
  );
}

function Addcard(){//добавить новую карточку
  return (
    <a href="#">Add a card...</a>

  );
}

export default SaveData;
