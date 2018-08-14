import React, {Components} from 'react';
import {connect} from 'react-redux';
import TodoItem from './Todoitem';

class TodoList extends React.Component {
    render () {
        console.log(this.props);
        return (
            <div>
                <ul>
                    {this.props.todos.map (t => <TodoItem key={t.id} title={t.title} />)}
                </ul>
            
            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        todos: state
    }
}

export default connect(mapStateToProps)(TodoList);