/* eslint-disable no-param-reassign */
import { scryfallApi } from './scryfall.api';

const setApi = scryfallApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSets: builder.query({
      query: () => '/sets',
      transformResponse: (res) => {
        console.log('sorting');
        return res.data.filter((set) => set.code.length === 3).sort((a, b) => {
          const first = a.name;
          const second = b.name;
          if (first > second) return 1;
          if (first < second) return -1;
          return 0;
        });
      },
      providesTags: ['sets'],
    }),
    getSetByCode: builder.query({
      query: (code) => `/sets/${code}`,
      providesTags: ['sets'],
    }),
  }),
});

export const { useGetSetByCodeQuery, useGetAllSetsQuery } = setApi;

// setData.reduce((acc, val) => {
//   if (acc[val.block_code]) {
//     acc[val.block_code] += 1;
//   } else {
//     acc[val.block_code] = 1;
//   }
//   return acc;
// }, {});
