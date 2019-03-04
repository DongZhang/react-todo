import React, { Component } from 'react';

import { connect } from 'react-redux';
import moment from 'moment';
import { Form, Input, Button } from 'antd';
import { handleSubmit } from '../../redux/actions';
import { selectTodoList } from '../../redux/selectors';
import './TodoCreation.css';

class TodoCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.form.validateFields((errors) => {});
  }

  setFactory = field => event => {
    this.props.form.setFieldsValue({
      [field]: event.target.value
    });
  };

  hasErrors = fieldsError => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { todoList } = this.props;
    const date = new moment().format('YYYY-MM-DD');

    this.props.form.validateFields((err, values) => {
      if (!err) {
        values = {
          ...values,
          id: todoList.length.toString(),
          creationTime: date,
          idDeleted: false
        };
        this.props.handleSubmit(values);
        this.props.form.resetFields();
        this.props.form.validateFields((errors) => {});
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

    const nameError = isFieldTouched('name') && getFieldError('name');
    const nicknameError =
      isFieldTouched('nickname') && getFieldError('nickname');

    return (
      <Form
        key={this.state.key}
        onSubmit={this.handleFormSubmit}
        className='todo-creation-wrapper'
      >
        <h3 className="todo-creation-title">Create a new to-do</h3>
        <Form.Item
          label='Name'
          validateStatus={nameError ? 'error' : ''}
          help={nameError || ''}
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Name is required!' }]
          })(<Input type='text' onChange={this.setFactory('name')} />)}
        </Form.Item>
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
              onChange={this.setFactory('nickname')}
              size='large'
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            disabled={this.hasErrors(getFieldsError())}
          >
            Create
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  todoList: selectTodoList(state)
});

const mapActionToProps = {
  handleSubmit: handleSubmit
};

export default Form.create()(
  connect(
    mapStateToProps,
    mapActionToProps
  )(TodoCreation)
);
