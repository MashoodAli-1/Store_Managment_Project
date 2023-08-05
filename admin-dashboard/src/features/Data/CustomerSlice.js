import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/CustomerApi.js";

const initialState = {
  id: "",
  customerName: "",
  cnic: "",
  address: "",
  phone: "",
  header: ["Id", "Customer Name", "Cnic", "Address", "Phone"],
  data: [],
};

export const createCustomerRecord = createAsyncThunk(
  "customer/createCustomerRecord",
  async (customer) => {
    const { data } = await api.createCustomer(customer);
    return data;
  }
);

export const getAllCustomerRecord = createAsyncThunk(
  "customer/getAllCustomerRecord",
  async () => {
    const { data } = await api.getCustomers();
    return data;
  }
);

export const updateCustomerRecord = createAsyncThunk(
  "customer/updateCustomerRecord",
  async (customer) => {
    const { data } = await api.editCustomer(customer);
    return data;
  }
);

export const deleteCustomerRecord = createAsyncThunk(
  "customer/deleteCustomerRecord",
  async (_id) => {
    console.log(`slice delete ${_id}`);
    await api.deleteCustomer(_id);
    return _id;
  }
);

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: {
    [createCustomerRecord.fulfilled]: (state, { payload }) => {
      var data = payload.map((item) => [
        item._id,
        item.name,
        item.phone.toString(),
        item.address,
        item.cnic,
      ]);
      console.log(data + "customer");
      state.data = data;
    },
    [getAllCustomerRecord.fulfilled]: (state, { payload }) => {
      var data = payload.map((item) => [
        item._id,
        item.name,
        item.phone.toString(),
        item.address,
        item.cnic,
      ]);
      console.log(data + "customer");
      state.data = data;
    },
    [updateCustomerRecord]: (state, { payload }) => {
      var data = payload.map((item) => [
        item._id,
        item.name,
        item.phone.toString(),
        item.address,
        item.cnic,
      ]);
      state.data = state.data.map((item) =>
        item._id === data._id ? data : item
      );
      console.log(`data changed ${state.data}`);
    },
    [deleteCustomerRecord]: (state, { payload }) => {
      state.data = state.data.filter((item) => item._id !== payload);
      console.log(`data changed ${state.data}`);
    },
  },
});

// export const { getCompanies } = companySlice.actions;

export default customerSlice.reducer;
