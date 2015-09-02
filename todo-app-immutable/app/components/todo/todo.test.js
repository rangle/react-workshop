import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import Todo from "./todo";

describe('todo-row', function () {

  let _component;

  beforeEach(function() {
    _component = TestUtils.renderIntoDocument( <Todo /> );
  });

});