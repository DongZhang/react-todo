import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { actionClick } from '../../redux/actions';
import { selectTodoList } from '../../redux/selectors';
import TodoCreation from '../todo/TodoCreation';

class TodoSection extends Component {
  static propTypes = { todoList: PropTypes.array.isRequired };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return <div>TodoSection
      <TodoCreation></TodoCreation>
      {this.props.todoList.map(todo => {
        return <div key={todo.id}>{todo.name} {todo.nickname}</div>
      })}

    </div>
  }
};

const mapStateToProps = state => ({
  todoList: selectTodoList(state),
});

const mapActionToProps = {
  handleClick: actionClick,
}

export default connect(mapStateToProps, mapActionToProps)(TodoSection);