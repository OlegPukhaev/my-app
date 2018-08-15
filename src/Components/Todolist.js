import React, {Components} from 'react';
import {connect} from 'react-redux';
import TodoItem from './Todoitem';
import addTodo from '../Actions/Actions';
import Collname from './Collname';

class TodoList extends React.Component {
    render () {
        // console.log(this.props);
        return (
            <div>
                {/* <Collname data={this.data} table={this.props.table}/> */}
                {this.props.todos.map (item => <TodoItem key={item.id} colname={item.colname} cards={item.cards} />)}

                {/* alert(this.props.todos.); */}
                                {/* <ul>
                    {this.props.todos.map (t => <TodoItem key={t.id} title={t.title} />)}
                </ul>
                <button onClick={this.addTodo}>Add new todo</button> */}
            </div> 
        );
    }
    // addTodo = () => this.props.dispatch(addTodo());
    addTodo = () => this.props.add();
}

// TodoList.propTypes = {};

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