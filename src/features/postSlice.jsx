import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: false,
  },
  reducers: {
    postFetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    setPostList: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
    },
    postFetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { postFetchStart, setPostList, postFetchFail } = postSlice.actions;
export default postSlice.reducer;
