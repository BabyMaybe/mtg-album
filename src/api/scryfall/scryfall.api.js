import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const scryfallApi = createApi({
  reducerPath: 'scryfallApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.scryfall.com',
  }),
  tagTypes: ['symbols', 'cards', 'sets'],
  endpoints: () => ({}),
});
