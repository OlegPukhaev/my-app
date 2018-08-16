import React, {components} from 'react';
import Cardinfo from './Cardinfo';


class TodoItem extends React.Component {
    constructor () {
        super()

        this.state = {showWin: "hide"}
        this.state = {activeId: null}
        this.handlerClick = this.handlerClick.bind(this)
        this.updateData = this.updateData.bind(this)
    }

    handlerClick (event){
        this.setState({showWin: "show"});
        this.setState({activeId: event.target.id});
    }

    updateData = (value) => {
        this.setState({ showWin: value });
    }

    render () {
        // var listItems = this.props.cards.map((item, index) =>
        //     <div class="col-12 bg-light rounded" key={item.title} id={index} value={index} onClick={this.handlerClick}>
        //         <h6 id={index}>{item.title}</h6>
        //         {item.comments != null && (<p id={index}>Comment: {item.comments.length}</p>)}
        //     </div>
        // );
        return (
            <div>
                {this.props.id} : {this.props.name}
            </div>
        );
    }
}

export default TodoItem;