import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuValue: 'info',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setMenuValue: (state, action) => {
      state.menuValue = action.payload.menuValue;
    },
  },
});

export const { setMenuValue } = profileSlice.actions;
export default profileSlice.reducer;
