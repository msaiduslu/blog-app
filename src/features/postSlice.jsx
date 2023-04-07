import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    categories: [],
    userPosts: [],
    loading: false,
    error: false,
  },
  reducers: {
    postFetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    setCategoryList: (state, { payload }) => {
      state.categories = payload;
      state.loading = false;
    },

    setPostList: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
    },
    setUserPosts: (state, { payload }) => {
      state.userPosts = payload;
      state.loading = false;
    },
    postFetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  postFetchStart,
  setPostList,
  postFetchFail,
  setCategoryList,
  setUserPosts,
} = postSlice.actions;
export default postSlice.reducer;
