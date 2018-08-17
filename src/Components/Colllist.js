import React, { Component } from 'react';
import {connect} from 'react-redux';
import Username from './Username';
import './App.css';
import Content from './Content';

class Board extends React.Component {
    render () {
        return (
            <div>
                <Content />
                {this.props.name}
            </div>
        );
    }
}

class Colllist extends React.Component {

    render() {
        // {alert(this.props.userprops.activeWin)}
        return (
            <div>
                {this.props.userprops.activeWin === true ? <Username /> : <Board name={this.props.userprops.userName}/>}
            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        userprops: state.userprops
    }
}

export default connect(mapStateToProps)(Colllist);