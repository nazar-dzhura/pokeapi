export interface Pokemon {
    name: string;
    url: string;
    imageSrc: string;
}

export type PokemonListResponse = Pokemon[]

export interface RawPokemon {
    name: string;
    url: string;
}

export interface RawPokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: RawPokemon[];
}

export interface FetchPokemonsQueryArgs {
    limit?: number;
    offset?: number;
}

export interface FetchPokemonByNameQueryArgs {
    name: string;
}


export interface PokemonDetailsResponse {
    id: number,
    name: string,
    height: number,
    weight: number,
    hp: number,
    attack: number,
    defense: number,
    types: string[],
    imageSrc: string
}