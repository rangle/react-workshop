import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import TodoRow from "./todo-row";

describe('todo-row', function () {

  let _component;
  let _selectedIndex;
  let _index;
  let _todo;
  let _editClicked;
  let _deleteClicked;

  beforeEach(function() {
    _index = 1;
    _todo = {
      name: 'todo'
    };

    _editClicked = (index) => {
      _selectedIndex = index;
    }
    _deleteClicked = (index) => {
      _selectedIndex = index;
    }

    _component = TestUtils.renderIntoDocument( <TodoRow todo={_todo} index={_index} editClicked={_editClicked} deleteClicked={_deleteClicked}/> );
  });

  it('renders without problems', function () {
    expect(_component).toExist();
    var inputs = TestUtils.scryRenderedDOMComponentsWithTag(_component, 'button');
    expect(inputs.length).toEqual(2);

    var tds = TestUtils.scryRenderedDOMComponentsWithTag(_component, 'td');
    expect(tds.length).toEqual(2);
  });

  it('edit click should set index value', function () {
    _component.editClicked();
    expect(_selectedIndex).toEqual(1);
  })

  it('deleteClicked click should set index value', function () {
    _component.deleteClicked();
    expect(_selectedIndex).toEqual(1);
  })

});