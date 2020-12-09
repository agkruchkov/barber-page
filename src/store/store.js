import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import servicesReducer from "./services";
import filtersReducer from "./filters";

const configureAppStore = () =>
  configureStore({
    reducer: combineReducers({
      services: servicesReducer,
      filters: filtersReducer,
    }),
  });

export default configureAppStore;
