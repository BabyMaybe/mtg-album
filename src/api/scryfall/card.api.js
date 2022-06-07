import { scryfallApi } from './scryfall.api';

const cardApi = scryfallApi.injectEndpoints({
  endpoints: (builder) => ({
    getRandomCard: builder.query({
      query: () => '/cards/random',
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
    getCardsInSet: builder.query({
      query: (setId) => `/cards/search?q=s:${setId}`,
    }),
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
  useGetCardByNameQuery,
  useGetCardByTcgIdQuery,
  useGetCardsInSetQuery,
  useGetCardByCardmarketIdQuery,
  useGetCollectionMutation,
  useAutoCompleteQuery,
} = cardApi;
