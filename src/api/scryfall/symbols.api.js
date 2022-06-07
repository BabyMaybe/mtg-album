import { scryfallApi } from './scryfall.api';

const symbolApi = scryfallApi.injectEndpoints({

  endpoints: (builder) => ({
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
  }),
});

export const { useGetAllSymbolsQuery } = symbolApi;
