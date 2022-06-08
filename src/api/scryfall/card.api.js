import { scryfallApi } from './scryfall.api';

const MAX_PAGE_SIZE = 175;

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
    getAllCardsInSet: builder.query({
      // query: (setId) => `/cards/search?q=s:${setId}`,
      async queryFn(
        setCode,
        queryApi,
        extraOptions,
        baseQuery,
      ) {
        const setLookup = await baseQuery(`/sets/${setCode}`);
        const setObj = setLookup.data;

        const pages = Math.ceil(setObj.card_count / MAX_PAGE_SIZE) + 1;

        const promises = [];
        for (let i = 1; i < pages; i++) {
          const pageUri = `${setObj.search_uri}&page=${i}`;
          promises.push(baseQuery(pageUri));
        }

        const results = await Promise.all(promises);

        const cardData = results.map((r) => r.data.data).flat();
        const errors = results.map((r) => r.errors).flat().filter((e) => e);

        return errors.length ? { error: errors } : { data: { cards: cardData, set: setObj } };
      },
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
  useGetAllCardsInSetQuery,
  useGetCardByCardmarketIdQuery,
  useGetCollectionMutation,
  useAutoCompleteQuery,
} = cardApi;
