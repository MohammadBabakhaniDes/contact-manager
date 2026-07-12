import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  getAllContacts,
  removeContact,  
} from "../data/data";


const initialState = {
  items: [],
  newItems: [],
  searchItems: [],
  statues: "null",
  path: true,
};

const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    changePath(state, action) {
      state.path = action.payload;
    },
    searchContact(state, action) {
      state.searchItems = state.items.filter((item) =>
        item.fullname.includes(action.payload)
      );
    },

    fetchContacts(state, action) {
      state.statues = "pending";
      state.items = getAllContacts();
      state.searchItems = getAllContacts();
      state.statues = "success";
    },

    createContact(state, action) {
      state.statues = "pending";
      let newContacts = addContact(action.payload);
      state.items = newContacts;
      state.searchItems = [...newContacts];
      state.statues = "success";
    },

    deleteContact(state, action) {
      state.statues = "pending";
      let newContacts = removeContact(action.payload);
      state.items = newContacts;
      state.searchItems = [...newContacts];
      state.statues = "success";
    },

    editContact(state, action) {
      state.statues = "pending";
      const { id, value } = action.payload;

      const index = state.items.findIndex((item) => item.id == Number(id));

      if (index !== -1) {
        state.items[index] = {
          ...state.items[index],
          ...value,
        };
      }

      state.searchItems = [...state.items];
      state.statues = "success";
    },
  },
});

export default ContactSlice.reducer;
export const {
  changePath,
  searchContact,
  fetchContacts,
  createContact,
  deleteContact,
  editContact,
} = ContactSlice.actions;
