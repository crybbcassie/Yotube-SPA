import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import favsReducer from './favsSlice'

export default configureStore({
  reducer: {
    videos: videoReducer,
    favs: favsReducer,
  },
});
