import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Cardinfo from './Cardinfo';



class Cardlist extends React.Component {
    constructor (props) {
        super(props)

        this.state = {showWin: "show"}
        this.state = {activeId: null}
        // this.data = this.props.data;
        // this.cards = this.data.cards
        // this.tabid = this.props.tabid
        this.handlerClick = this.handlerClick.bind(this)
        this.updateData = this.updateData.bind(this)
    }

    handlerClick (event){
        // alert("tid" + event.target.id);
        
        this.setState({showWin: "show"});
        this.setState({activeId: event.target.id});
    }

    updateData = (value) => {
        this.setState({ showWin: value });
    }

    render() {
        let tid = this.props.tabid;
        
        var listItems = this.props.cards.map((item, index) => {

          if (item.tabid === tid) {
            return (
              <div class="col-12 bg-light rounded" key={item.title} id={index} value={index} onClick={this.handlerClick}>
                                <h6 id={index}>{item.title}</h6>
                                   {item.comments != null && (<p id={index}>Comment: {item.comments.length}</p>)}
                                </div>
                        );
                      }          
                    }
            
        );
        
        return (
            
            <div id="cardlist">
                {this.state.showWin === "show" && <Cardinfo tabid ={tid} cardid={this.state.activeId} updateData={this.updateData} colname={this.props.colname}/>}
                <div class="col-12">
                    {listItems}
                </div>
            </div> 
        );
    }
}

function mapStateToProps (state){
    return {
        userprops: state.userprops,
        cards: state.cards.card
    }
}

export default connect(mapStateToProps)(Cardlist);