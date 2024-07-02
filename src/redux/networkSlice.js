// // src/redux/networkSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   requests: []
// };

// const networkSlice = createSlice({
//   name: 'network',
//   initialState,
//   reducers: {
//     addRequest: (state, action) => {
//       state.requests.push(action.payload);
//     },
//     clearRequests: (state) => {
//       state.requests = [];
//     }
//   }
// });

// export const { addRequest, clearRequests } = networkSlice.actions;
// export default networkSlice.reducer;










// src/redux/networkSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requests: [],
  filter: 'All'
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
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addRequest, clearRequests, setFilter } = networkSlice.actions;
export default networkSlice.reducer;
