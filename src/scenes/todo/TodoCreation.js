import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import moment from 'moment';
import { handleSubmit } from '../../redux/actions';
import { selectTodoList } from '../../redux/selectors';

class TodoCreation extends Component {
  // static PropTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      nickname: '',
      idDeleted: false
    };
  }

  setFactory = field => event => {
    this.setState({
      [field]: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { todoList } = this.props;
    const date = new moment().format('YYYY-MM-DD');

    this.setState(
      {
        id: todoList.length.toString(),
        creationTime: date
      },
      () => {
        this.props.handleSubmit(this.state);
      }
    );
  };

  render() {
    const { name, nickname } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type='text'
          onChange={this.setFactory('name')}
          placeholder='Name'
          value={name}
        />
        <input
          type='text'
          onChange={this.setFactory('nickname')}
          placeholder='Nickname'
          value={nickname}
        />
        <button type='submit'>click</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  todoList: selectTodoList(state)
});

const mapActionToProps = {
  handleSubmit: handleSubmit
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(TodoCreation);
