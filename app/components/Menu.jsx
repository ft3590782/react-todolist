import React from 'react';
// export default () =>
//       <nav className="menu">
//         <ul className="tab">
//           <li>首页</li>
//           <li>待办事项</li>
//           <li>已办事项</li>
//         </ul>
//       </nav>;
export default class HeaderMenu extends React.Component{
  constructor(props){
    super(props);
  }
  render (){
    return(
      <nav className="menu">
        <ul className="tab">
          <li>首页</li>
          <li>待办事项</li>
          <li>已办事项</li>
        </ul>
      </nav>
    )
  }
}
