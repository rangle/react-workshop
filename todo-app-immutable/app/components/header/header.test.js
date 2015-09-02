import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import Header from "./header";

describe('header', function () {
  it('renders without problems', function () {
    var root = TestUtils.renderIntoDocument( <Header title="Todo App" /> );
    expect(root).toExist();
  });
});