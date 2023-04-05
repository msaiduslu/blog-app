import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    visible: false,
    status: null,
    message: null,
  },
  reducers: {
    show: (state, { payload: { status, message } }) => {
      state.visible = true;
      state.status = status;
      state.message = message;
    },
    hide: (state) => {
      state.visible = false;
      state.status = null;
      state.message = null;
    },
  },
});

export const { show, hide } = notificationSlice.actions;
export default notificationSlice.reducer;
