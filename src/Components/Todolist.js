import React, {Components} from 'react';
import {connect} from 'react-redux';
import TodoItem from './Todoitem';
import addTodo from '../Actions/Actions';
import Collname from './Collname';

class TodoList extends React.Component {
    render () {
        return (
            <div>
                {this.props.todos.map (item => <TodoItem key={item.id} colname={item.colname} cards={item.cards} />)}
            </div> 
        );
    }
    addTodo = () => this.props.add();
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
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);