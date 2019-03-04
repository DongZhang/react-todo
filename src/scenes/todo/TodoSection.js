import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { actionClick } from '../../redux/actions';
import { selectTodoList } from '../../redux/selectors';
import TodoCreation from '../todo/TodoCreation';
import TodoItem from '../todo/TodoItem';

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
        return todo && !todo.isDeleted && <TodoItem todo={todo} key={todo.id}></TodoItem>
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