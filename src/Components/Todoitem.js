import React, {components} from 'react';

class TodoItem extends React.Component {
    render () {
        var listItems = this.props.cards.map((item, index) =>
            <div class="col-12 bg-light rounded" key={item.title} id={index} value={index} onClick={this.handlerClick}>
                <h6 id={index}>{item.title}</h6>
                {item.comments != null && (<p id={index}>Comment: {item.comments.length}</p>)}
            </div>
        );
        // alert(this.props.card.title);
        return (
            // <div>
            //     {this.props.colname}
            // </div>
            
            <div class="text-center" id="content">
                <div class="text-center">
                    <h3 onClick={this.handlerClick}>{this.props.colname}</h3>
                    {/* <p>{this.props.cards[0].title}</p> */}
                    <div id="cardlist">
                        {/* {this.state.showWin === "show" && <Cardinfo table={this.props.table} data={this.data} id={this.state.activeId} updateData={this.updateData}/>} */}
                        <div class="col-12">
                            {listItems}
                        </div>
                    </div> 
                    {/* {this.state.formstate !== "hide" && <Changetitle table={this.props.table} data={this.data} updateData={this.updateData}/>} */}
                </div>
            </div>
        );
    }
}

export default TodoItem;