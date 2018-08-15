import React, {components} from 'react';

class TodoItem extends React.Component {
    render () {
        return (
            // <div>
            //     {this.props.colname}
            // </div>
            <div class="text-center" id="content">
                <div class="text-center">
                    <h3 onClick={this.handlerClick}>{this.props.colname}</h3>
                    {/* {this.state.formstate !== "hide" && <Changetitle table={this.props.table} data={this.data} updateData={this.updateData}/>} */}
                </div>
            </div>
        );
    }
}

export default TodoItem;