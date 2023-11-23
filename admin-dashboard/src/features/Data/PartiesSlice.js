import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/PartyApi.js";

const initialState = {
  id: "",
  partyName: "",
  cnic: "",
  address: "",
  phone: "",
  header: ["Id", "Party Name", "Cnic", "Address", "Phone"],
  data: [],
};

export const createPartyRecord = createAsyncThunk(
  "party/createPartyRecord",
  async (party) => {
    const { data } = await api.createParty(party);
    return data;
  }
);

export const getAllPartyRecord = createAsyncThunk(
  "party/getAllPartyRecord",
  async () => {
    const { data } = await api.getParties();
    return data;
  }
);

export const updatePartyRecord = createAsyncThunk(
  "party/updatePartyRecord",
  async (party) => {
    console.log(`edit party = ${party.cnic}`);
    const { data } = await api.editParty(party);
    return data;
  }
);

export const deletePartyRecord = createAsyncThunk(
  "party/deletePartyRecord",
  async (id) => {
    console.log(`slice delete ${id}`);
    await api.deleteParty(id);
    return id;
  }
);

const partySlice = createSlice({
  name: "party",
  initialState,
  reducers: {},
  extraReducers: {
    [createPartyRecord.fulfilled]: (state, { payload }) => {
      var data = payload.map((item) => [
        item.id,
        item.name,
        item.phone.toString(),
        item.address,
        item.cnic,
      ]);
      console.log(data + "party");
      state.data = data;
    },
    [getAllPartyRecord.fulfilled]: (state, { payload }) => {
      var data = payload.map((item) => [
        item.id,
        item.name,
        item.phone.toString(),
        item.address,
        item.cnic,
      ]);
      console.log(data + "party");
      state.data = data;
    },
    [updatePartyRecord.fulfilled]: (state, { payload }) => {
      const updatedParty = [
        payload.id,
        payload.name,
        payload.phone.toString(),
        payload.address,
        payload.cnic,
      ];

      state.data = state.data.map((item) =>
        item.id === updatedParty.id ? updatedParty : item
      );
      console.log(`data changed ${state.data}`);
    },

    [deletePartyRecord.fulfilled]: (state, { payload }) => {
      state.data = state.data.filter((item) => item.id !== payload);
      console.log(`data changed ${state.data}`);
    },
  },
});

export default partySlice.reducer;
