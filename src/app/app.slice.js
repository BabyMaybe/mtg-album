import { createSlice } from '@reduxjs/toolkit';

const initialState = { start: 'meow' };

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateSet(state, { payload }) {
      console.log('payload', payload);
      state.set = payload;
    },
  },
});

export const { updateSet } = appSlice.actions;

export const selectSet = (state) => state.app.set;

export default appSlice.reducer;
