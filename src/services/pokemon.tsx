
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),
    endpoints: (builder) => ({
        getAllPokemon: builder.query({
            query: () => ({
                url: 'pokemon',
                method: 'GET'
            })
        }),
        getPokemonById: builder.query({
            query: (id) => {
                return {
                    url: `pokemon/${id}`,
                    method: 'GET'
                }
            }
        })
    }),
})


export const { useGetAllPokemonQuery, useGetPokemonByIdQuery } = pokemonApi