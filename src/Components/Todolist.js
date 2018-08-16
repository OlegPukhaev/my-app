import React, {Components} from 'react';
import {connect} from 'react-redux';
import {addTodo,delTodo} from '../Actions/Actions'
import TodoItem from './Todoitem';

class TodoList extends React.Component {


    // addTodo (){
    //     this.props.add();    
    // }


    render () {
        return (
            <div>
                <ul>
                    {/* {this.props.todos.lastValues.map (item => <TodoItem ke={item} item={item} />)} */}
                    {this.props.todos.result}
                </ul>
                <button onClick={this.addTodo}>Add new todo</button>
                <button onClick={this.delTodo}>DEL</button>
            </div>
        );
    }

    addTodo = () => this.props.dispatch(addTodo(9));
    delTodo = () => this.props.dispatch(delTodo(5));
    // addTodo = () => this.props.add(); 
    
}

TodoList.propTypes = {};

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

export default connect(mapStateToProps)(TodoList);
// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
