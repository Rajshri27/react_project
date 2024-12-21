import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  selectedTodo: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((_, index) => index !== action.payload);
    },
    editTodo: (state, action) => {
      state.selectedTodo = action.payload;
    },
    updateTodo: (state, action) => {
      const { index, data } = action.payload;
      state.list[index] = data;
      state.selectedTodo = null;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, updateTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});