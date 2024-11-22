import { configureStore } from '@reduxjs/toolkit';
import headerTitleReducer from './headerTitleReducer';

export const store = configureStore({
  reducer: {
    headerTitle: headerTitleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;