export const actionClick = params => {
  return {
    type: 'testAction',
    payload: {
      hahah: params
    }
  };
};

export const handleSubmit = todo => {
  return {
    type: 'todoSubmit',
    payload: todo
  };
};

export const handleDelete = id => {
  return {
    type: 'todoDelete',
    payload: id
  };
};

export const handleUpdate = (id, todo) => {
  return {
    type: 'todoUpdate',
    payload: {
      id: id,
      todo: todo
    }
  };
};
