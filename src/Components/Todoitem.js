import React, {components} from 'react';

class TodoItem extends React.Component {
    render () {
        return (
            <div>
                {this.props.item}
            </div>
        );
    }
}

export default TodoItem;