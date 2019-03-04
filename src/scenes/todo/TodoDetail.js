import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Form, Input, Button, Card, Icon } from 'antd';
import { handleUpdate } from '../../redux/actions';
import { selectTodoList } from '../../redux/selectors';

import './TodoDetail.css';

class TodoDetail extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      showNicknameInput: false,
      todo: this.props.todoList.filter(todo => {
        return todo.id === this.props.match.params.id;
      })[0]
    };
  }

  componentDidMount() {
    if (!this.state.todo) {
      this.props.history.push('/todos');
    }
  }

  handleEditNickname = () => {
    this.setState({ showNicknameInput: true }, () => {
      this.props.form.setFieldsValue({ nickname: this.state.todo.nickname });
    });
  };

  setTodoField = field => event => {
    this.props.form.setFieldsValue({
      nickname: event.target.value
    });
  };

  hasErrors = fieldsError => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { todo } = this.state;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState(
          {
            todo: { ...todo, nickname: values.nickname },
            showNicknameInput: false
          },
          () => {
            this.props.handleUpdate(todo.id, this.state.todo);
          }
        );
        this.props.form.resetFields();
        this.props.form.validateFields(errors => {});
      }
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;
    const { todo, showNicknameInput } = this.state;
    const nicknameError =
      isFieldTouched('nickname') && getFieldError('nickname');

    return (
      <div className='todo-detail-wrapper'>
        <Link to='/todos' className='todo-detail-back'>
          <Icon type='rollback' style={{ marginRight: 16 }} />
          Go back
        </Link>
        {todo && (
          <Card title={todo.name} style={{ marginTop: 16 }}>
            <p>ID: {todo.id}</p>
            <p>Nickname: {todo.nickname}</p>
            <p>Created at: {todo.creationTime}</p>
            {!showNicknameInput && (
              <Button
                size='small'
                type='primary'
                onClick={this.handleEditNickname}
              >
                Edit
              </Button>
            )}
            {showNicknameInput && (
              <Form onSubmit={this.handleFormSubmit}>
                <Form.Item
                  label='Nickname'
                  validateStatus={nicknameError ? 'error' : ''}
                  help={nicknameError || ''}
                >
                  {getFieldDecorator('nickname', {
                    rules: [{ required: true, message: 'Nickname is required' }]
                  })(
                    <Input
                      type='text'
                      onChange={this.setTodoField('nickname')}
                      size='large'
                    />
                  )}
                </Form.Item>
                <Button
                  size='small'
                  type='primary'
                  htmlType='submit'
                  disabled={this.hasErrors(getFieldsError())}
                >
                  Save
                </Button>
              </Form>
            )}
          </Card>
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

export default Form.create()(
  withRouter(
    connect(
      mapStateToProps,
      mapActionToProps
    )(TodoDetail)
  )
);
