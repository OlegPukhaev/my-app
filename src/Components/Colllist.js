import React, { Component } from 'react';
import {connect} from 'react-redux';
import Username from './Username';
import './App.css';
import Content from './Content';

class Board extends React.Component {
    render () {
        return (
            <div>
                <Content  id={this.props.tab.colid1} colname={this.props.tab.colname1}/>
                <Content  id={this.props.tab.colid2} colname={this.props.tab.colname2}/>
                <Content  id={this.props.tab.colid3} colname={this.props.tab.colname3}/>
                <Content  id={this.props.tab.colid4} colname={this.props.tab.colname4}/>
            </div>
        );
    }
}

class Colllist extends React.Component {

    render() {
        return (
            <div>
                {this.props.userprops.activeWin === true ? <Username /> : 
                    <Board 
                        tab={this.props.tab}
                    />
                }
            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        userprops: state.userprops,
        tab: state.tab
    }
}

export default connect(mapStateToProps)(Colllist);