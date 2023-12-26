import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/actions";

const initialState = {
  isLoadingBar: { status: STATUS.DEFAULT },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoadingBar(state, action) {
      state.isLoadingBar = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
