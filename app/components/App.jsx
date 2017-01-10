import React from 'react';
import HeaderMenu from './menu';
import InputTodo from './InputTodo'
import TodoList from './TodoList'
require('./App.css');

// export default ()=>
//   <div><h1>Hello World</h1>
//   <HeaderMenu />
//   </div>;

// let todoList = [
//     {
//         "title": "第一条",
//         "checked": false
//     }, {
//         "title": "第二条",
//         "checked":false
//     }, {
//         "title": "第三条",
//         "checked": false
//     }
// ]
let dataKey='todoList';
let getLocalStorage =(key)=>(localStorage&&localStorage[key])?JSON.parse(localStorage[key]):[];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: getLocalStorage(dataKey)
        }
        this.changeTodoList=this.changeTodoList.bind(this);
        this.checkedTodoItem=this.checkedTodoItem.bind(this);
        this.deleteToItem=this.deleteToItem.bind(this);
    }
    changeTodoList(newValue) {
        let tempToDoList=this.state.todoList;
        tempToDoList.push({
            "title":newValue,
            "checked": false
        });
        this.setState({todoList: tempToDoList});
        this.saveTodoList(dataKey,this.state.todoList);
    }
    checkedTodoItem(id,checked){
      let tempToDoList=this.state.todoList;
      tempToDoList[id].checked=checked;
      this.setState({todoList: tempToDoList});
      this.saveTodoList(dataKey,this.state.todoList);
    }
    deleteToItem(id){
      let tempToDoList=this.state.todoList;
      tempToDoList.splice(id,1);
      console.log(tempToDoList);
      this.setState({todoList: tempToDoList});
      this.saveTodoList(dataKey,this.state.todoList);
    }
    saveTodoList(key,data){
      // console.log(localStorage);
      let dataStr=JSON.stringify(data);
      localStorage.setItem(key,dataStr);
    }
    render() {
        console.log(this.props.title);
        let title = this.props.title;
        return (
            <div>
                <h1>Hello World {title}</h1>
                <HeaderMenu/>
                <InputTodo clickCallback={this.changeTodoList}/>
                <TodoList data={this.state.todoList} checkedCallback={this.checkedTodoItem} deleteToItem={this.deleteToItem}/>
            </div>
        );
    }
}
