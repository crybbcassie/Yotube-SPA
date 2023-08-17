import { createSlice } from "@reduxjs/toolkit";
import {v4} from 'uuid'

const initialState = {
  favs: [
    {
      id: v4(),
      search: "How to play chess?",
      result: 10,
      sort: "relevance",
    },
  ],
};

export const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    addFav: (state, action) => {
      state.favs.push({
        id: v4(),
        search: action.payload,
        result: 10,
        sort: "relevance",
      });
    },
    removeFav: (state, action) => {
      state.favs = state.favs.filter(
        (fav) => fav.search !== action.payload.title
      );
    },
    editFav: (state, action) => {
       const { newSearch, newResult, newSort } = action.payload;
      state.favs = state.favs.map((fav) => {
        return fav.id === action.payload.id
          ? { ...fav, search: newSearch, result: newResult, sort: newSort }
          : fav;
      });
    }
  },
});

export const { addFav, removeFav, editFav } = favsSlice.actions;

export default favsSlice.reducer;  



