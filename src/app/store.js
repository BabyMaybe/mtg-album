import { configureStore } from '@reduxjs/toolkit';
import { scryfallApi } from '../api/scryfall/scryfall.api';
import appSlice from './app.slice';

export const store = configureStore({
  reducer: {
    app: appSlice,
    [scryfallApi.reducerPath]: scryfallApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(scryfallApi.middleware),
});
