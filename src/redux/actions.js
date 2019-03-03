export const actionClick = (params) => {
  return({
    type: 'testAction',
    payload: {
      hahah: params
    }
  });
}

export const handleSubmit = (todo) => {
  // $event.preventDefault();
  return({
    type: 'todoSubmit',
    payload: todo
  })
}