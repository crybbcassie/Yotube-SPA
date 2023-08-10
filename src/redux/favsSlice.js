import { createSlice } from "@reduxjs/toolkit";

export const favsSlice = createSlice({
  name: "favs",
  initialState: [],
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

      // Проверяем, есть ли уже элемент с таким значением newState в массиве
      const isDuplicate = state.value.some(
        (item) =>
          item.search.toLowerCase().trim() === newState.toLowerCase().trim()
      );

      // Если элемент уже существует, можно выполнить какие-то дополнительные действия или просто вернуть текущее состояние
      if (isDuplicate) {
        // Действия для случая, когда элемент уже существует
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