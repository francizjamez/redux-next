import {createSlice} from "@reduxjs/toolkit";
import {createAction} from "@reduxjs/toolkit";

export const startHomeIncrement = createAction<void>("home/startHomeIncrement")

export const homeCounterSlice = createSlice({
  name: 'homeCounter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1
  }
})