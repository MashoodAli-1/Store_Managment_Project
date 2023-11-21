import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/AccReceivableApi";

const initialState = {
  id: "",
  categoryName: "",
  header: ["Customer Name", "Item Data","Received Till Now","Current Received","Remaining","Date"],
  data: [],
};

