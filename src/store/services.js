import { createSlice } from "@reduxjs/toolkit";
import { requestServicesList } from "../data/servicesList";
import { createSelector } from "reselect";
import { getFilters } from "./filters";

const slice = createSlice({
  name: "services",
  initialState: [],
  reducers: {
    loadded: (state, action) => action.payload,
  },
});

export const loadServices = (dispatch, state) => {
  const response = requestServicesList();
  dispatch(slice.actions.loadded(response));
};

export const getServices = (state) => state.services;

export const getFilteredServices = createSelector(
  [getServices, getFilters],
  (services, filters) => {
    let filteredServices = [...services];

    if (!filters.query || filters.query.length < 1)
      return filteredServices.filter(
        (item) =>
          ((item.age[0] < filters.age && filters.age < item.age[1]) ||
            filters.age === 0) &&
          (item.gender === filters.gender ||
            filters.gender === "Для всех" ||
            item.gender === "Для всех")
      );

    const query = filters.query.toLowerCase();

    return filteredServices.filter(
      (item) =>
        (item.title.toLowerCase().includes(query) ||
          item.content.toLowerCase().includes(query)) &&
        ((item.age[0] < filters.age && filters.age < item.age[1]) ||
          filters.age === 0) &&
        (item.gender === filters.gender ||
          filters.gender === "Для всех" ||
          item.gender === "Для всех")
    );
  }
);

export const { loadded } = slice.actions;

export default slice.reducer;
