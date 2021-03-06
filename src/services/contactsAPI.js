import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6199fec19022ea0017a7afc2.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: (build) => ({
    getContacts: build.query({
      query: () => `contacts`,
      providesTags: (result) =>
        // --- is result available? ---
        result
          ? // --- successful query ---
            [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : // --- when we get an error, but still want to refetch this query ---
            // --- when`{ type: 'Posts', id: 'LIST' }` is invalidated ----
            [{ type: 'Contacts', id: 'LIST' }],
    }),
    deleteContact: build.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Contacts', id }],
    }),
    addContact: build.mutation({
      query: (newContact) => ({
        url: 'contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi
