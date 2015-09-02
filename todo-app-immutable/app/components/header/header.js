'use strict';

import React from 'react';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1 className="text-center">
        {this.props.title}
      </h1>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};