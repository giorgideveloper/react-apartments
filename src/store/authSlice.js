import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { setToken } from "../services/ApiService";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    loginState: (state, action) => {
      localStorage.setItem("token", action.payload.access); // Set token in storage
      localStorage.setItem("refresh", action.payload.refresh); // Set refresh in storage
      if (action.payload.time) {
        localStorage.setItem("expires", moment().add(1, "minutes")); // Set token expire time in storage
      }
      setToken(action.payload.access);
      state.isAuthenticated = true;
    },
    logoutState: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      localStorage.removeItem("expires");
      state.isAuthenticated = false;
    },
  },
});

export const { loginState, logoutState } = authSlice.actions;

export default authSlice.reducer;
