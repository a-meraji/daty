import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    loadingArr: [],
    notife: { isTriggerd: false, message: "", color: "" },
  },
  reducers: {
    addLoading: (state) => {
       state.loadingArr.push(0)
    },
    reduceLoading: (state) => {
       state.loadingArr.pop(0)
    },
    setNotife: (state, action) => {
      return {
        ...state,
        notife: {
          isTriggerd: true,
          message: action.payload.message,
          color: action.payload.color,
        },
      };
    },
    clearNotife: (state) => {
      return {
        ...state,
        notife: { isTriggerd: false, message: "", color: "" },
      };
    },
  },
});

const notifeColors = {
  error: "error",
  warning: "warning",
  success: "success",
  info: "info",
};

export { notifeColors };
export const { addLoading, reduceLoading, setNotife, clearNotife } =
  layoutSlice.actions;
export default layoutSlice.reducer;
