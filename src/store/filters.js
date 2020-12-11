import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    query: "",
    age: 0,
    gender: "Для всех",
  },
  reducers: {
    changedQuery: (state, action) => {
      return { ...state, ...action.payload };
    },
    filtered: (state, action) => {
      return action.payload;
    },
  },
});

export const getFilters = (state) => state.filters;

export const { changedQuery, filtered } = slice.actions;

export default slice.reducer;
