import React from 'react';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
        //绑定也可以通过在render中直接用bind来绑定
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }
    handleCheckboxChange(index) {
        this.props.checkedCallback(index, event.target.checked);
    }
    handleDelete(index){
      this.props.deleteToItem(index);
    }
    render() {
        var that = this;
        return (
            <ul>
                {this.state.data.map(function(item, index) {
                    // console.log(item);
                    return <li key={index} className={item.checked === true
                        ? 'checked'
                        : ''}>
                        <span className="text">{(index + 1) + '.' + item.title}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="option">
                            <input type="checkbox" onChange={that.handleCheckboxChange.bind(this, index)}/>
                            完成</span>
                        <span className="option">
                            <input type="button" onClick={that.handleDelete.bind(this, index)} value="删除"/>
                        </span>
                    </li>
                })
}
            </ul>
        )
    }
}
