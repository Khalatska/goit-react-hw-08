import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () =>
  (instance.defaults.headers.common.Authorization = "");

export const authRegister = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/signup", formData);
      console.log("REGISTER data: ", data);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const authLogin = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post("/users/login", formData);

      console.log("LOGIN data: ", data);
      setToken(data.token);
      return data;
    } catch (e) {
    
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const authRefresh = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (!token) return thunkApi.rejectWithValue(null);
      setToken(token);
      const { data } = await instance.get("/users/current");
      console.log("REFRESH data: ", data);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const authLogOut = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await instance.post("/users/logout");
      clearToken();

      return;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
