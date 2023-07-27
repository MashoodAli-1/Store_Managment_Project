import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  header: [],
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setHeader: (state, { payload }) => {
      state.header = payload;
    },
    setData: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setHeader, setData } = dataSlice.actions;
export default dataSlice.reducer;
