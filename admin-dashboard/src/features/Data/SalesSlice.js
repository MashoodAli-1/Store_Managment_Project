import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/SalesApi.js";

/* 
      cname,
      data,
      totalBill,
      receivedAmount,
      remainingAmount,
      status,
*/

const initialState = {
  name: "",
  data: [],
  totalBill: 0,
  recievedAmount: 0,
  remainingAmount: 0,
  status: "",
};

export const createSales = createAsyncThunk(
  "Sales/createSales",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState().sale;
    var sale = {
      cname: state.name,
      // data : JSON.parse(JSON.stringify([...state.data])), //deep copy of the array
      data: state.data,
      totalBill: state.totalBill,
      receivedAmount: state.recievedAmount,
      remainingAmount: state.remainingAmount,
      status: state.status,
    };
    const { data } = await api.createSales(sale);
    return data;
  }
);

const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {
    addSales: (state, { payload }) => {
      console.log(`payload is = ${payload[0][0]}`);
      state.data.push(payload[0]);
      state.totalBill += payload[0][2] * payload[0][3];
    },
    editSales: (state, { payload }) => {
      console.log(`edit = ${payload[0]}`);
      state.data = state.data.map((row) =>
        row[0] === payload[0] ? payload : row
      );
      state.totalBill = 0;
      state.data.map((row) => (state.totalBill += row[2] * row[3]));
    },
    deleteSales: (state, { payload }) => {
      console.log(`delete = ${payload}`);
      state.data = state.data.filter((row) => row[0] !== payload[0]);
      state.totalBill -= payload[2] * payload[3];
    },
    checkOut: (state, { payload }) => {
      state.name = payload.name;
      state.recievedAmount = payload.recamount;
      state.remainingAmount = payload.remainingAmount;
      state.status = payload.status;
      console.log(
        `${payload.remainingAmount},${payload.recamount},${state.name},${state.recievedAmount},${state.remainingAmount},${state.status}`
      );
    },
  },
  extraReducers: {
    [createSales.fulfilled]: (state, { payload }) => {
      console.log("payload is ", payload, "and the state is ", state);
    },
  },
});

export const { addSales, editSales, deleteSales, checkOut } = saleSlice.actions;

export default saleSlice.reducer;
