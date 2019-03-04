import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { handleUpdate } from '../../redux/actions';
import { selectTodoList } from '../../redux/selectors';

class TodoDetail extends Component {
  static propTypes = {
    // todo: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      showNicknameInput: false,
      todo: this.props.todoList.filter(todo => {
        console.log(this.props, this.props.todoList);
        return todo.id === this.props.match.params.id;
      })[0]
    };
  }

  handleEditNickname = () => {
    this.setState({ showNicknameInput: true });
  };

  setTodoField = field => event => {
    const value = event.target.value;
    this.setState(prevState => {
      return {
        todo: { ...prevState.todo, [field]: value }
      };
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { todoList } = this.props;
    // const date = new moment().format('YYYY-MM-DD');

    // this.setState(
    //   {
    //     id: todoList.length.toString(),
    //     creationTime: date
    //   },
    //   () => {
    //     this.props.handleSubmit(this.state);
    //   }
    // );
    this.props.handleUpdate(this.state.todo.id, this.state.todo);
  };

  render() {
    const { todo, showNicknameInput } = this.state;

    return (
      <div>
        <Link to='/todos'>go back</Link>
        TodoDetail
        <div>{todo.name}</div>
        <button onClick={this.handleEditNickname}>Edit</button>
        {showNicknameInput && (
          <form onSubmit={this.handleFormSubmit}>
            <input
              value={todo.nickname}
              onChange={this.setTodoField('nickname')}
              placeholder='Nickname'
            />
            <button type='submit'>Save</button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoList: selectTodoList(state)
});

const mapActionToProps = {
  handleUpdate: handleUpdate
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(TodoDetail);
