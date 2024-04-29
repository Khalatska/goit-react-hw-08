import { createSlice } from "@reduxjs/toolkit";
import { authLogin, authRegister, authRefresh, authLogOut } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(authRegister.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(authLogOut.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(authRefresh.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(authRefresh.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(authRefresh.rejected, (state) => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
