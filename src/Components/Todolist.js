import React, {Components} from 'react';
import {connect} from 'react-redux';

class TodoList extends React.Component {
    render () {
        console.log(this.props);
        return (
            <div>
                <ul>

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