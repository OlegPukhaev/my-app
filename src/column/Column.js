import React, { Component } from 'react';
// import '../../src/bootstrap.css';
// import '../../src/style.css';
// import getCards from '.././functions/Functions.js';

// Карточка с заданием
class Card extends React.Component {
    render () {
        return (
            <div class="card mt-1">
            <div class="card-body">
                <p class="card-title cardstyle">{this.props.title}</p>
                <a href="#" class="card-link">Comments 0</a>
            </div>
            </div>
        );
    }
}

// Колонки с определенными заданиями
class Column extends React.Component {

    getCards(localkey) {//Возвращает объект карточки по ключу localkey в localstorage
        const returnObj = JSON.parse(localStorage.getItem(localkey));
      return returnObj;
    }

    render () {
        
        var coll = this.props.colname;
        var myobj = this.getCards(coll);
        // alert(myobj.colname);
        return (
            <div class="col-2 border rounded bg-light ml-1">
                <h4 class="centered">{myobj.colname} </h4>

                    <Card title={myobj.cards[0]} />
                    <Card title={myobj.cards[1]} />
                    <Card title={myobj.cards[2]} />
    
                <h6 class="p-2">Add a card...</h6>
          </div>
        );
    }
}

export default Column;