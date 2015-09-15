import React from 'react';

export default class TodoList extends React.Component {

  render() {
    var rows =  this.props.items.map((item, index) => {
      return (<li className={item.selected ? 'todo-item-completed' : 'todo-item'} key={index}>
                <button onClick={this.props.onDelete.bind(null, item)}>X</button>
                 <span onClick={this.props.onToggle.bind(null, item)}>{item.text}</span>
              </li>)
    });

    if (this.props.items.length === 0) {
      return(<h2>no todos!!!</h2>)
    }

    return (
      <ul className='todo-list'>
        {rows}
      </ul>

    );
  }


}

