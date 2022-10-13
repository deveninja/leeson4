import { createSlice } from "@reduxjs/toolkit"
import { loginAsync, registerAsync } from "./authActions";


const initialState = {
  user: null,
  isFetching: false,
  isSuccess: false,
  isError: false,
  message: ''
}


export const auth =  createSlice({
  name: 'auth',
  initialState,
  reducers: {
    sayHello: (state, {payload}) => {
      state.message = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(registerAsync.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.user = action.payload;
      });
  },
});


export const { sayHello } = auth.actions;

export default auth.reducer