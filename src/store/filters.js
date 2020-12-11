import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    query: "",
    age: 0,
    gender: "Для всех",
  },
  reducers: {
    filtered: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const getFilters = (state) => state.filters;

export const { filtered } = slice.actions;

export default slice.reducer;
