import React, { Component } from 'react';
import Cards from '.././card/Cards.js';
import TextArea from '.././input/Input.js';

class Title extends React.Component {
    render () {
        return (
            <p>{this.props.text}</p>
        );
    }
}
// Колонки с определенными заданиями
class Column extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {activeId: null};
        this.handlerClick = this.handlerClick.bind(this);
    }

    updateData = (value) => {
        this.setState({ name: value })
     }

    getCards(localkey) {//Возвращает объект карточки по ключу localkey в localstorage
        const returnObj = JSON.parse(localStorage.getItem(localkey));
      return returnObj;
    }

    CardsList(props) {//Возвращает список карточек
        var cards = props;
        var listItems = cards.map((number, index) =>
            <Cards title={number} mykey={index} />  
        );
        return (
            <div>
                {listItems}
            </div>
        );
    }

    handlerClick (event) {
        var board = event.target.id
        this.setState({activeId: event.target.id});
        alert(event.target.id);
    }

    render () {
        var coll = this.props.colname;
        var cardobj = this.getCards(coll);
        var cardselem = this.CardsList(cardobj.cards);
        return (
            <div class="col-2 border rounded bg-light ml-1">
                <div class="centered">
                  <h5 id={this.props.colname} onClick={this.handlerClick}>{cardobj.colname}</h5>
                  {this.state.activeId == coll && <TextArea text={cardobj.colname}/>}
                  {/* <Title text="Ololo" /> */}
                  {/* {this.state.activeId != coll ? cardobj.colname : <TextArea text={cardobj.colname}/>} */}
                  {/* {this.state.activeId == coll ? <TextArea text={cardobj.colname}/> : cardobj.colname} */}

                </div>
                    {/*Карточки выводятся мэпом */}
                     {cardselem} 
                <h6 class="p-2">Add a card...</h6> 
               
          </div>
        );
    }
}

export default Column;