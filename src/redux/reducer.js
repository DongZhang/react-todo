import { combineReducers } from 'redux';

const initialState = {
  test: '',
  todoList: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'testAction':
      const { payload } = action;
      return {
        ...state,
        test: payload.hahah
      };
    case 'todoSubmit':
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };
    default: {
      return state;
    }
  }
}

// export default combineReducers({
//   test: todoReducer
// })
export default todoReducer