import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const scryfallApi = createApi({
  reducerPath: 'scryfallApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.scryfall.com',
  }),
  tagTypes: ['symbols', 'cards', 'sets'],
  endpoints: (builder) => ({
    getRandomCard: builder.query({
      query: () => '/cards/random',
    }),
    getAllSymbols: builder.query({
      query: () => '/symbology',
      transformResponse: (response) => response.data
        .reduce((acc, { english, svg_uri: url, symbol }) => {
          // eslint-disable-next-line no-param-reassign
          acc[symbol] = { english, symbol, url };
          return acc;
        }, {}),
      providesTags: ['symbols'],
    }),
    getCardByName: builder.query({
      query: (name) => `/cards/named?fuzzy=${name}`,
      providesTags: ['cards'],
    }),
    getSetByCode: builder.query(
      {
        query: (code) => `/sets/${code}`,
        providesTags: ['sets'],
      },
    ),
  }),
});
export const {
  useGetRandomCardQuery, useGetAllSymbolsQuery, useGetCardByNameQuery, useGetSetByCodeQuery,
} = scryfallApi;
