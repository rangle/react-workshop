import React from "react";

export default class TodoRow extends React.Component {

  constructor(props) {
    super(props);

    this.editClicked = this.editClicked.bind(this);
    this.deleteClicked = this.deleteClicked.bind(this);
  }

  editClicked() {
    this.props.editClicked(this.props.index);
  }

  deleteClicked() {
    this.props.deleteClicked(this.props.index);
  }

  render() {
    return (
      <tr>
        <td>{this.props.todo.get('name')}</td>
        <td>
          <button
            className='btn btn-primary btn-sm'
            onClick={this.editClicked}>Edit
          </button>

          &nbsp;&nbsp;

          <button
            className='btn btn-danger btn-sm'
            onClick={this.deleteClicked}>Delete
          </button>
        </td>
      </tr>
    );
  }
}

TodoRow.propTypes = {
  editClicked: React.PropTypes.func.isRequired,
  deleteClicked: React.PropTypes.func.isRequired,
  todo: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired
}
