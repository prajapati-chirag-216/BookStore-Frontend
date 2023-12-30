import { createSlice } from "@reduxjs/toolkit";
import { SNACKBAR_SEVERITY, STATUS } from "../utils/variables";

const initialState = {
  isLoadingBar: { status: STATUS.DEFAULT },
  operationState: { status: true, activity: "Fetching.." },
  snackBar: {
    status: false,
    message: "",
    severity: SNACKBAR_SEVERITY.DEFAULT,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsLoadingBar(state, action) {
      state.isLoadingBar = action.payload;
    },
    setOperationState(state, action) {
      state.status = action.status;
      state.activity = action.activity;
    },
    setSnackBar(state, action) {
      state.snackBar = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
