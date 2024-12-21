export const addTodo = (data) => ({
    type: "ADD_TODO",
    payload: data,
  });
  
  export const deleteTodo = (index) => ({
    type: "DELETE_TODO",
    payload: index,
  });
  
  export const editTodo = (index) => ({
    type: "EDIT_TODO",
    payload: index,
  });
  
  export const updateTodo = (index, data) => ({
    type: "UPDATE_TODO",
    payload: { index, data },
  });