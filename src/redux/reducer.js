// import { combineReducers } from 'redux';

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
    case 'todoDelete':
    console.log(action.payload);
      const newList = state.todoList.map((todo) => {
        if (todo && todo.id === action.payload) {
          todo.isDeleted = true;
        }
          return todo;
      });
      console.log(newList);
      return {
        ...state,
        todoList: newList
      }
    case 'todoUpdate':
      const updatedList = state.todoList.map((todo) => {
        if (todo && todo.id === action.payload.todo.id) {
          todo = action.payload.todo;
        }
        return todo;
      })
      return {
        ...state,
        todoList: updatedList
      }
    
    default: {
      return state;
    }
  }
}

// export default combineReducers({
//   test: todoReducer
// })
export default todoReducer