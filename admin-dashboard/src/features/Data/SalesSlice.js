import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/CustomerApi.js";

const initialState = {
  data: [],
  totalBill: 0,
  remainingAmount: 0,
  recievedAmount: 0,
};

const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {
    addSales: (state, { payload }) => {
      console.log(`payload is = ${payload[0][0]}`);
      state.data.push(payload[0]);
      state.totalBill += payload[0][2] * payload[0][3];
      state.recievedAmount = payload[0][4];
      state.remainingAmount = state.totalBill - state.recievedAmount;
    },
    editSales: (state, { payload }) => {
      console.log(`edit = ${payload[0]}`);
      state.data = state.data.map((row) =>
        row[0] === payload[0] ? payload : row
      );
    },
    deleteSales: (state, { payload }) => {
      console.log(`delete = ${payload[0]}`);
      state.data = state.data.filter((row) => row[0] !== payload[0]);
    },
  },
});

export const { addSales, editSales, deleteSales } = saleSlice.actions;

export default saleSlice.reducer;
