import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from "react-router";
// import moment from 'moment';
import { handleDelete } from '../../redux/actions';
// import { selectTodoList } from '../../redux/selectors';

class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      nickname: ''
    };
  }

  handleViewDetail = id => {
    const { history } = this.props;
    history.push('todo/' + id);
  };

  render() {
    const { todo, handleDelete } = this.props;
    return (
      <div>
        {todo.id} {todo.name} {todo.nickname}
        <button
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            this.handleViewDetail(todo.id);
          }}
        >
          View Detail
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapActionToProps = {
  handleDelete: handleDelete
};

export default withRouter(
  connect(
    mapStateToProps,
    mapActionToProps
  )(TodoItem)
);
// export default TodoItem;
