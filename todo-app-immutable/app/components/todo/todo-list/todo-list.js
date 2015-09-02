import React from "react";
import TodoRow from '../todo-row/todo-row';

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var rows = [];
    var _this = this;

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {_this.props.todos.map((todo, index) =>
            <TodoRow
              todo={todo}
              key={index}
              index={index}
              editClicked={_this.props.editClicked}
              deleteClicked={_this.props.deleteClicked}
            />
          )}
        </tbody>
      </table>
    );
  }
}

TodoList.propTypes = {
  editClicked: React.PropTypes.func.isRequired,
  deleteClicked: React.PropTypes.func.isRequired
};
