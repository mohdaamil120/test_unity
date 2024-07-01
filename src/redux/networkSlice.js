// src/redux/networkSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requests: []
};

const networkSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    addRequest: (state, action) => {
      state.requests.push(action.payload);
    },
    clearRequests: (state) => {
      state.requests = [];
    }
  }
});

export const { addRequest, clearRequests } = networkSlice.actions;
export default networkSlice.reducer;
