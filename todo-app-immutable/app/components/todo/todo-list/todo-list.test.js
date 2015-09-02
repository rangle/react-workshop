import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import TodoList from "./todo-list";

describe('todo-list', function () {

  let _component;
  let _todoList;
  let _editTodo;
  let _deleteTodo;

  beforeEach(function() {
    _todoList = [];

    _editTodo = (todo) => 'cancelClick';
    _deleteTodo = (todo) => 'cancelClick';

    _component = TestUtils.renderIntoDocument( <TodoList todos={_todoList} editClicked={_editTodo} deleteClicked={_deleteTodo} /> );
  });

  it('renders without problems', function () {
    expect(_component).toExist();
  });

});