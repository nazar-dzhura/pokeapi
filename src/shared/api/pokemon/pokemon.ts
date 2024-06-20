import baseApi from "../base";
import {
    FetchPokemonByNameQueryArgs,
    FetchPokemonsQueryArgs,
    PokemonDetailsResponse,
    PokemonListResponse
} from "./types";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import {normalizeFetchPokemonByNameResponse, normalizeFetchPokemonsResponse} from "./normalizers";
import {DEFAULT_POKEMON_LIMIT, DEFAULT_POKEMON_OFFSET} from "../../consts/pokemon";

export const pokemonApi = baseApi.injectEndpoints({
    endpoints: (builder: EndpointBuilder<any, any, any>) => ({
        fetchPokemons: builder.query<PokemonListResponse, FetchPokemonsQueryArgs>({
            query: ({ limit = DEFAULT_POKEMON_LIMIT, offset = DEFAULT_POKEMON_OFFSET }) => ({
                url: `pokemon`,
                params: { limit, offset },
                method: 'GET',
            }),
            transformResponse: normalizeFetchPokemonsResponse,
        }),
        fetchPokemonByName: builder.query<PokemonDetailsResponse, FetchPokemonByNameQueryArgs>({
            query: ({ name }) => ({
                url: `pokemon/${name}`
            }),
            transformResponse: normalizeFetchPokemonByNameResponse,
        }),
    }),
});

export const { useFetchPokemonsQuery, useFetchPokemonByNameQuery } = pokemonApi;
