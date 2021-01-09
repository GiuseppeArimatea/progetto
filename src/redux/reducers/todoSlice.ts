import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add(state: any[], { payload }) {
      state.push(payload);
    },
    del(state, { payload }) {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export const { add, del } = todoSlice.actions;

export const selectTodos = ({ todos }: any) => todos;

export default todoSlice.reducer;
