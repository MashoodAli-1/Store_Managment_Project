import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/CatagoryApi";

const initialState = {
  id: "",
  categoryName: "",
  header: ["Id", "Category Name"],
  data: [],
};

export const createCategoryRecord = createAsyncThunk(
  "category/createCategoryRecord",
  async (category) => {
    const { data } = await api.createCategory(category);
    return data;
  }
);

export const getAllCategoryRecord = createAsyncThunk(
  "category/getAllCategoryRecord",
  async () => {
    const { data } = await api.getCategories();
    return data;
  }
);

export const updateCategoryRecord = createAsyncThunk(
  "category/updateCategoryRecord",
  async (category) => {
    console.log(`slice ${category.name}`);
    const { data } = await api.editCategory(category);
    return data;
  }
);

export const deleteCategoryRecord = createAsyncThunk(
  "category/deleteCategoryRecord",
  async (_id) => {
    console.log(`slice delete ${_id}`);
    await api.deleteCategory(_id);
    return _id;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [createCategoryRecord.fulfilled]: (state, { payload }) => {
      var data = payload.map((item) => [item._id, item.name]);
      console.log(data + "category");
      state.data = data;
    },
    [getAllCategoryRecord.fulfilled]: (state, { payload }) => {
      var data = payload.map((item) => [item._id, item.name]);
      console.log(data + "category");
      state.data = data;
    },
    [updateCategoryRecord]: (state, { payload }) => {
      var data = payload.map((item) => [item._id, item.name]);
      state.data = state.data.map((item) =>
        item._id === data._id ? data : item
      );
      console.log(`data changed ${state.data}`);
    },
    [deleteCategoryRecord]: (state, { payload }) => {
      state.data = state.data.filter((item) => item._id !== payload);
      console.log(`data changed ${state.data}`);
    },
  },
});

export default categorySlice.reducer;
