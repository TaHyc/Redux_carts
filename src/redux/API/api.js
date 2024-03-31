import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const API_URL = 'https://65b561bf41db5efd2867a918.mockapi.io/fotos-database'

export const api=createApi({
    reducerPath: 'api',
    tagTypes:['Recipe'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: builder=>({
    getRecipes: builder.query({
        query: ()=>'/?sortBy=id',
        providesTags: ()=>[{
        type: 'Recipe'
        }]
        })
    })
})

export const {useGetRecipesQuery} = api

