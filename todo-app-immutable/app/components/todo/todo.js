'use strict';

import React from "react";
import {Map, List} from "immutable";
import TodoList from "./todo-list/todo-list";
import TodoForm from "./todo-form/todo-form";

export default class Todo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: Map({
        todo: Map({}),
        todoList: List(),
        selectedIndex: -1
      })
    };

    this.undoStack = [];
    this.redoStack = [];
    this.saveTodo = this.saveTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.cancelClick = this.cancelClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUndo = this.handleUndo.bind(this);
    this.handleRedo = this.handleRedo.bind(this);
  }


  handleUndo() {
    if(this.undoStack.length) {
      this.redoStack.push(this.state.data);
      this.setState({
        data: this.undoStack.pop()
      });
    }
  }

  handleRedo() {
    if(this.redoStack.length) {
      this.setState({
        data: this.redoStack.pop()
      });
    }
  }

  cancelClick() {
    this.setState((previousState) => ({
      data: previousState.data.merge({
        selectedIndex: -1,
        todo: {}
      })
    }));
  }

  isTodoItemSelectedToEdit() {
    return (this.state.data.get('selectedIndex') !== -1);
  }

  saveTodo(todo) {
    this.undoStack.push(this.state.data);

    if(this.isTodoItemSelectedToEdit()) {
      this.setState((previousState) => ({
        data: previousState.data.update('todoList', (list =>
          list.set(previousState.data.get('selectedIndex'), todo)))
      }));
    } else {
      this.setState((previousState) => ({
        data: previousState.data.update('todoList', (list =>
          list.push(todo)))
      }));
    }

    setTimeout(this.refs.todoForm.cancelClick);
  }

  editTodo(index) {
    this.undoStack.push(this.state.data);

    this.setState(function(previousState) {
      return {
        data: previousState.data.merge({
          todo: previousState.data.get('todoList').get(index),
          selectedIndex: index
        })
      };

    });
  }

  handleChange(event) {
    let todoEntry = event.target.value;

    this.undoStack.push(this.state.data);

    this.setState((previousState) => ({
      data: previousState.data.update('todo', (todo) =>
        todo.set('name', todoEntry))
    }));
  }

  deleteTodo(index) {
    this.undoStack.push(this.state.data);

    this.setState((previousState) => ({
      data: previousState.data.update('todoList', function(todoList) {
        return todoList.delete(index);
      })
    }));
  }

  render() {
    return (
      <div>
        <TodoForm
          ref='todoForm'
          todo={this.state.data.get('todo')}
          onSave={this.saveTodo}
          cancelClick={this.cancelClick}
          handleChange={this.handleChange}
          handleUndo={this.handleUndo}
          handleRedo={this.handleRedo}
        />
        <hr/>
        <TodoList
          todos={this.state.data.get('todoList')}
          editClicked={this.editTodo}
          deleteClicked={this.deleteTodo}
        />
      </div>
    );
  }
}
