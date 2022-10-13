import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "./authService";

export const loginAsync = createAsyncThunk(
  'auth/login',
  async (amount) => {
    const response = await login(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const registerAsync = createAsyncThunk(
  'auth/register',
  async (user) => {
    const response = await register(user);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);