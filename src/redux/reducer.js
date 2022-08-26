import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  
  initialState,
  
  reducers: {
   
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },

    deleteToDos: (state, action) => {
      state.splice(action.payload.id,1);
      return state;
    }
   
  },
  
});

export const { addTodos, deleteToDos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;


