// import React, {Components} from 'react';
// import {connect} from 'react-redux';
// // import {addTodo,delTodo, textTodo, changeObj} from '../Actions/Actions'
// import TodoItem from './Todoitem';

// class TodoList extends React.Component {
//     constructor (props) {
//         super(props)

//         this.obj = {id: 1, names: ["Oleg","Lisa","Dima"] }
//         this.obj1 = {
//                     table:"tab1", 
//                     colname: 'MyToDo',
//                     cards: [
//                             {
//                                 "title":"Give Me some money",
//                                 "desc":"Дескрипшин",
//                                 "comments" :[{
//                                                 "comment":"Comment 1",
//                                                 "autor":"Vasya"
//                                             }],
//                                 "autor" : "Oleg"
//                             }
//                     ]
//                 }
//     }



//     render () {
//         // alert(this.obj.result);
//         this.obj1.colname = "NeTOOOOOO";

//         return (
//             <div>
//                 <ul>
//                     {this.props.todos.lastValues.map(item => <TodoItem key={item.id} name={item.names} id={item.id} />)}
//                     {this.props.todos.result}
//                     {this.props.todos.tabobj.colname}
//                     {this.props.todos.tabobj.colname}
                
//                 </ul>
//                 <button onClick={this.addTodo}>Add new todo</button>
                
//                 <button onClick={this.delTodo}>DEL</button>

//                 <button onClick={this.delText}>Add new text</button>
//                 <button onClick={this.changeObj}>Change object</button>
//             </div>
            
//         );
//     }

    
//     addTodo = () => this.props.dispatch(addTodo(9));
//     delTodo = () => this.props.dispatch(delTodo(5));
//     delText = () => this.props.dispatch(textTodo(this.obj));
//     changeObj = () => this.props.dispatch(changeObj(this.obj1));
//     // addTodo = () => this.props.add(); 
    
// }

// TodoList.propTypes = {};

// function mapStateToProps (state){
//     return {
//         todos: state.todos
//     }
// }

// // function mapDispatchToProps(dispatch){
// //     return {
// //         add: () => dispatch(addTodo())
// //     }
// // }

// export default connect(mapStateToProps)(TodoList);
// // export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
