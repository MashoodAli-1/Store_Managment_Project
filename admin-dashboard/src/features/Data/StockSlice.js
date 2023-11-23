import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/ItemApi.js"; // Updated to use ItemApi.js

const initialState = {
  id: "",
  name: "",
  size: "",
  category: "",
  price: "",
  quantity: "",
  header: ["Id", "Item Name", "Size", "Category", "Price", "Quantity"],
  data: [],
};

export const createItemRecord = createAsyncThunk(
  "stock/createItemRecord",
  async (item) => {
    const { data } = await api.createItem(item);
    return data;
  }
);

export const getAllItemRecord = createAsyncThunk(
  "stock/getAllItemRecord",
  async () => {
    const { data } = await api.getAllItems();
    return data;
  }
);

export const updateItemRecord = createAsyncThunk(
  "stock/updateItemRecord",
  async (item) => {
    const { data } = await api.updateItem(item);
    return data;
  }
);

export const deleteItemRecord = createAsyncThunk(
  "stock/deleteItemRecord",
  async (id) => {
    console.log(`slice delete ${id}`);
    await api.deleteItem(id);
    return id;
  }
);

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {},
  extraReducers: {
    [createItemRecord.fulfilled]: (state, { payload }) => {
      var data = payload.map((item) => [
        item.id,
        item.name,
        item.size,
        item.catagory, // Assuming the backend returns "catagory" instead of "category"
        item.price != null ? item.price.toString() : "",
        item.quantity != null ? item.quantity.toString() : "",
      ]);
      console.log(data + "stock");
      state.data = data;
    },
    [getAllItemRecord.fulfilled]: (state, { payload }) => {
      var data = payload.map((item) => [
        item.id,
        item.name,
        item.size,
        item.catagory, // Assuming the backend returns "catagory" instead of "category"
        item.price != null ? item.price.toString() : "",
        item.quantity != null ? item.quantity.toString() : "",
      ]);
      console.log(data + "stock");
      state.data = data;
    },
    [updateItemRecord]: (state, { payload }) => {
      var data = payload.map((item) => [
        item.id,
        item.name,
        item.size,
        item.catagory, // Assuming the backend returns "catagory" instead of "category"
        item.price != null ? item.price.toString() : "",
        item.quantity != null ? item.quantity.toString() : "",
      ]);
      state.data = state.data.map((item) =>
        item.id === data.id ? data : item
      );
      console.log(`data changed ${state.data}`);
    },
    [deleteItemRecord]: (state, { payload }) => {
      state.data = state.data.filter((item) => item.id !== payload);
      console.log(`data changed ${state.data}`);
    },
  },
});

export default stockSlice.reducer;
