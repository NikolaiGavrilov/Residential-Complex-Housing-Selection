import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HeaderTitleState {
  headerTitle: string;
}

const initialState: HeaderTitleState = {
  headerTitle: 'Пентхаусы',
};

const headerTitleSlice = createSlice({
  name: 'headerTitle',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.headerTitle = action.payload; 
    },
  },
});

export const { setTitle } = headerTitleSlice.actions;
export default headerTitleSlice.reducer;