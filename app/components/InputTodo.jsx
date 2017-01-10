import React from 'react';

export default class InputTodo extends React.Component{
  constructor(props){
    super(props);
    // 如果要在callback中使用this关键字,必须在构造函数中事先绑定!
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
    let val=document.getElementById('txtTodo').value;
    // 调用父组件中的callback
    this.props.clickCallback(val);
    document.getElementById('txtTodo').value='';
  }
  render (){
    return(
      <div className="input-todo"><input type="text" id="txtTodo" placeholder="请输入待办事项" />
      <input type="button" id="btnTodoSubmit" onClick={this.handleClick}  value="提交" />
      </div>
    )
  }
}
// <input type="button" id="btnTodoSubmit" onClick={this.getInputVal}  value="提交" />
