import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async function ({ search, result, sort }, { rejectWithValue }) {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: "AIzaSyCsNXupWYNLK2vB5E1zhdS9TdtsrOwDkAM",
            part: "snippet",
            type: "video",
            maxResults: result,
            q: search,
            sort: sort,
          },
        }
      );
      return response.data.items;
      // console.log({ data: response.data.items, search: search });
      // return { data: response.data.items, search: search };
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    status: null,
    error: null,
  },
  reducers: {
    addVideos(state, action) {
      state.videos.push(action.payload.data);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  addVideos,
} = videoSlice.actions;

export default videoSlice.reducer;
