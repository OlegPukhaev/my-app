import React, { Component } from 'react';
import Cards from '.././card/Cards.js';
import TextArea from '.././input/Input.js';
// import {getCards} from './../functions/Functions.js';

class Title extends React.Component {
    render () {
        return (
            <p>{this.props.text}</p>
        );
    }
}
// Колонки с определенными заданиями
class Column extends React.Component {
    state = {
        name: 'Бумеранг вернулся назад'
      }

    constructor(props) {
        super(props);
    
        // var cardobj = this.getCards(coll);
        this.state = {activeId: null};
        this.handlerClick = this.handlerClick.bind(this);
        this.CardsList = this.CardsList.bind(this);
    }

    updateData = (value) => {
        this.setState({ activeId: value });
     }

    getCards(localkey) {//Возвращает объект карточки по ключу localkey в localstorage
        const returnObj = JSON.parse(localStorage.getItem(localkey));
      return returnObj;
    }

    CardsList(props) {//Возвращает список карточек
        var cards = props;
        // alert (cards[0].title);
        var listItems = cards.map((number, index) =>
            <Cards title={number.title} mykey={index} collid={this.props.colname} comments={number.comments.length}/>  
        );
        return (
            <div>
                {listItems}
                {/* {console.log(listItems)} */}
            </div>
        );
    }

    handlerClick (event) {
        var board = event.target.id
        this.setState({activeId: event.target.id});
        // alert(event.target.id);
    }

    render () {
        var coll = this.props.colname;//tab1
        var cardobj = this.getCards(coll);
        var cardselem = this.CardsList(cardobj.cards);
        return (
            <div class="col-2 border rounded bg-light ml-1">
                <div class="centered">
                    <h5 id={this.props.colname} onClick={this.handlerClick}>{cardobj.colname}</h5>
                    {/* {alert(this.state.activeId)} */}
                    {this.state.activeId == coll && 
                        <TextArea 
                            // boardname={"Pukhaev"}
                            cardobj={cardobj}
                            collid={this.props.colname}
                            title={cardobj.colname}
                            updateData={this.updateData}
                        />
                    }
                </div>
                    {/*Карточки выводятся мэпом */}
                     {cardselem} 
                <h6 class="p-2">Add a card...</h6> 
               
          </div>
        );
    }
}

export default Column;