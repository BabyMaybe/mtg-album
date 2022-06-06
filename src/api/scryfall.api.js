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
    getCardByTcgId: builder.query({
      query: (id) => `/cards/tcgplayer/${id}`,
      providesTags: ['cards'],
    }),
    getCardByCardmarketId: builder.query({
      query: (id) => `/cards/cardmarket/${id}`,
      providesTags: ['cards'],
    }),
    getSetByCode: builder.query(
      {
        query: (code) => `/sets/${code}`,
        providesTags: ['sets'],
      },
    ),
    getCollection: builder.mutation({
      query: (cardList) => {
        console.log('looking up');
        console.log('cardList', cardList);

        const identifiers = cardList.reduce((acc, card) => {
          console.log('acc', acc);
          console.log('card', card);
          acc.push({
            name: card.name,
          });
          return acc;
        }, []);

        return {
          url: '/cards/collection',
          method: 'POST',
          body: { identifiers },
        };
      },
    }),
    autoComplete: builder.query({
      query: (text) => `/cards/autocomplete?q=${text}`,
    }),
  }),
});
export const {
  useGetRandomCardQuery,
  useGetAllSymbolsQuery,
  useGetCardByNameQuery,
  useGetSetByCodeQuery,
  useGetCardByTcgIdQuery,
  useGetCardByCardmarketIdQuery,
  useGetCollectionMutation,
  useAutoCompleteQuery,
} = scryfallApi;
