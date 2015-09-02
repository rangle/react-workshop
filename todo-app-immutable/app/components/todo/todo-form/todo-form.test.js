import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import TodoForm from "./todo-form";

describe('todo-form', function () {

  let _component;
  let _todo;
  let _cancelClick;

  beforeEach(function() {
    _todo = {
      name: 'todo',
      id: 1
    };

    _cancelClick = () => 'cancelClick';

    _component = TestUtils.renderIntoDocument( <TodoForm todo={_todo} cancelClick={_cancelClick} /> );
  });

  it('renders without problems', function () {
    expect(_component).toExist();
  });

});