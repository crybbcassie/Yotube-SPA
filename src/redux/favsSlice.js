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
      console.log(action.payload);
    },
    removeFav: (state, action) => {
      const newArr = state.value.filter(
        (item) => item.search !== action.payload
      );
      return { ...state, value: newArr };
    },

  },
});

export const { addFav, removeFav } = favsSlice.actions;

export default favsSlice.reducer;  



// editItem: (state, action) => {
    //   const { prevState, newState, results, sort } = action.payload;
    //   const isDuplicate = state.value.some(
    //     (item) =>
    //       item.search.toLowerCase().trim() === newState.toLowerCase().trim()
    //   );
    //   if (isDuplicate) {
    //     return state;
    //   }

    //   const newArr = state.value.map((item) =>
    //     item.search === prevState
    //       ? {
    //           search: newState,
    //           results,
    //           sort,
    //         }
    //       : item
    //   );
    //   return { ...state, value: newArr };
    // },