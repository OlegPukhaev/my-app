import React from 'react';
import {connect} from 'react-redux';
import Username from './Username';
import './App.css';
import Content from './Content';

class Board extends React.Component {
    render () {
        return (
            <div>
                <Content  tabid={this.props.tab.colid1} colname={this.props.tab.colname1} username={this.props.username}/>
                <Content  tabid={this.props.tab.colid2} colname={this.props.tab.colname2} username={this.props.username}/>
                <Content  tabid={this.props.tab.colid3} colname={this.props.tab.colname3} username={this.props.username}/>
                <Content  tabid={this.props.tab.colid4} colname={this.props.tab.colname4} username={this.props.username}/>
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
                        username={this.props.userprops.userName}
                    />
                }
            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        userprops: state.userprops,
        tab: state.tab,
        winstate: state.winstate
    }
}

export default connect(mapStateToProps)(Colllist);