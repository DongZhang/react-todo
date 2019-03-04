import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { handleDelete } from '../../redux/actions';
import { Button, Card  } from 'antd';

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
      <Card title={todo.name} style={{marginTop: 16}}>
        <p>ID: {todo.id}</p>
        <p>Nickname: {todo.nickname}</p>
        <p>Created at: {todo.creationTime}</p>
        <Button
          size='small'
          type="primary"
          onClick={() => {
            this.handleViewDetail(todo.id);
          }}
        >
          View Detail
        </Button>
        <Button
          type="danger"
          size='small'
          onClick={() => {
            handleDelete(todo.id);
          }}
          style={{marginLeft: 16}}
        >
          Delete
        </Button>
      </Card>
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
