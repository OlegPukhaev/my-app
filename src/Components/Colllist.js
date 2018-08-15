import React, { Component } from 'react';
import {connect} from 'react-redux';
import addTodo from '../Actions/Actions'
import './App.css';
import Content from './Content';

class Colllist extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {
        // alert(this.props.todos[0].table);
        return (
            <div>
                <Content data={this.props.todos[0]} table={this.props.todos[0].table}/>
                <Content data={this.props.todos[1]} table={this.props.todos[1].table}/>
                <Content data={this.props.todos[2]} table={this.props.todos[2].table}/>
                <Content data={this.props.todos[3]} table={this.props.todos[3].table}/>
                
                {/* <Content table="tab2"/> 
                <Content table="tab3"/> 
                <Content table="tab4"/>  */}
            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch){
    return {
        add: () => dispatch(addTodo())
    }
}

// export default connect(mapStateToProps)(TodoList);
export default connect(mapStateToProps, mapDispatchToProps)(Colllist);

// export default Colllist;