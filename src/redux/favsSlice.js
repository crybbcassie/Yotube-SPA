import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favs: [
    {
      search: "How to play chess?",
      result: 10,
      sort: "relevance",
    },
    {
      search: "How to receive princess treatment",
      result: 10,
      sort: "relevance",
    },
    {
      search: "Barbie 2023",
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
        search: action.payload,
        results: 10,
        sort: "relevance",
      });
    },
    removeFav: (state, action) => {
      state.favs = state.favs.filter(
        (fav) => fav.search !== action.payload.title
      );
    },
    editFav: (state, action) => {
      const {newSearch, newResult, newSort} = action.payload;
      console.log(action.payload)

      // const newArr = state.favs.map((item) =>
      //   item.search === prevState
      //     ? {
      //         search: newState,
      //         results,
      //         sort,
      //       }
      //     : item
      // );
      // return { ...state, favs: newArr };
    },
  },
});

export const { addFav, removeFav, editFav } = favsSlice.actions;

export default favsSlice.reducer;  



