import { createSlice } from "@reduxjs/toolkit";
import { getAllGroups } from "../data/data";

const initialState = {
  items: [],
};

const GroupsSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    fetchGroups(state, action) {
      state.items = getAllGroups();
    },
  },
});

export default GroupsSlice.reducer;

export const { fetchGroups } = GroupsSlice.actions;
