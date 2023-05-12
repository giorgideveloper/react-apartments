import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { setToken } from "../services/ApiService";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    loginState: (state, action) => {
      localStorage.setItem("token", action.payload.access); // Set token in storage
      localStorage.setItem("refresh", action.payload.refresh); // Set refresh in storage
      localStorage.setItem("user", JSON.stringify(action.payload.user)); // Set user data in storage
      // Set token expire time in storage
      if (action.payload.time)
        localStorage.setItem("expires", moment().add(30, "minutes"));
      setToken(action.payload.access);
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    logoutState: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      localStorage.removeItem("expires");
      localStorage.removeItem("user");
      setToken();
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginState, logoutState } = authSlice.actions;

export default authSlice.reducer;
