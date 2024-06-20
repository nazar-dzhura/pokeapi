import {FetchPokemonsQueryArgs, PokemonDetailsResponse, PokemonListResponse, RawPokemonListResponse} from "./types";
import {pokemonImagesSources} from "../../consts/pokemon-images-sources";
import {capitalizeFirstLetter} from "../../lib/string-utils";
import {DEFAULT_POKEMON_OFFSET, POKEMON_COUNT} from "../../consts/pokemon";

export const normalizeFetchPokemonsResponse = (
    response: RawPokemonListResponse,
    _: any,
    {offset = DEFAULT_POKEMON_OFFSET}: FetchPokemonsQueryArgs
): PokemonListResponse => {
    const getPokemonAbsoluteIndex = (index: number) => offset + index

    return response.results
        .map((pokemon, index) => ({
            name: capitalizeFirstLetter(pokemon.name),
            url: pokemon.url,
            imageSrc: pokemonImagesSources[getPokemonAbsoluteIndex(index)],
        }))
        .filter((_, index) => getPokemonAbsoluteIndex(index) < POKEMON_COUNT);
}

export const normalizeFetchPokemonByNameResponse = (response: any): PokemonDetailsResponse => {
    return {
        id: response.id,
        name: capitalizeFirstLetter(response.name),
        height: response.height,
        weight: response.weight,
        hp: response.stats[0].base_stat,
        attack: response.stats[1].base_stat,
        defense: response.stats[2].base_stat,
        types: response.types.map((type: any) => type.type.name),
        imageSrc: pokemonImagesSources[response.id - 1],
    }
}