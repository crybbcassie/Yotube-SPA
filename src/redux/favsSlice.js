import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      search: "How to play chess?",
      result: 8,
      sort: "relevance",
    },
    {
      search: "How to receive princess treatment",
      result: 8,
      sort: "relevance",
    },
    {
      search: "Barbie 2023",
      result: 8,
      sort: "relevance",
    },
  ],
};

export const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.value.push({
        search: action.payload,
        results: 8,
        sort: "relevance",
      });
    },
    deleteItem: (state, action) => {
      const newArr = state.value.filter(
        (item) => item.search !== action.payload
      );
      return { ...state, value: newArr };
    },
    editItem: (state, action) => {
      const { prevState, newState, results, sort } = action.payload;
      const isDuplicate = state.value.some(
        (item) =>
          item.search.toLowerCase().trim() === newState.toLowerCase().trim()
      );
      if (isDuplicate) {
        return state;
      }

      const newArr = state.value.map((item) =>
        item.search === prevState
          ? {
              search: newState,
              results,
              sort,
            }
          : item
      );
      return { ...state, value: newArr };
    },
  },
});

export const { addItem, deleteItem, editItem } = favsSlice.actions;

export default favsSlice.reducer;