import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    token: null,
    userId: null,
    userEmail: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action?.payload?.user.username;
      state.token = action?.payload?.key;
      state.error = false;
      state.userId = action?.payload?.user.id;
      state.userEmail = action?.payload?.user.email;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action?.payload?.username;
      state.token = action?.payload?.token;
      state.error = false;
      state.userId = action?.payload?.user.id;
      state.userEmail = action?.payload?.user.email;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.error = false;
      state.token = null;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} = authSlice.actions;
export default authSlice.reducer;
