import { configureStore } from '@reduxjs/toolkit';
import { scryfallApi } from '../api/scryfall.api';

export const store = configureStore({
  reducer: {
    [scryfallApi.reducerPath]: scryfallApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(scryfallApi.middleware),
});
