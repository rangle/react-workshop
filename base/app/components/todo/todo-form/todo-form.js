import React from 'react';

export default class TodoForm extends React.Component {

  render() {
    var props = {
      onKeyDown: this.handleKeyDown,
      ref: 'newTodo',
      type: 'text',
      placeholder: 'new todos'
    };

    return (
      <div>
        <input {...props} />
        <button onClick={this.saveTodo}>Add</button>
      </div>
    );
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.saveTodo();
    }
  }

  saveTodo = () =>  {
    var value = React.findDOMNode(this.refs.newTodo).value;
    this.props.onSave(value);
    React.findDOMNode(this.refs.newTodo).value = null;
  }
}
