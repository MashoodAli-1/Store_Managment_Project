import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/Data/DataSlice";
const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
