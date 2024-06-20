import React from 'react'
import {PokemonDetailsCard} from "../../entities/pokemon/pokemon-details-card";
import {useParams} from "react-router-dom";
import {Result, Skeleton} from "antd";
import {useFetchPokemonByNameQuery} from "../../shared/api/pokemon";

export const PokemonDetails: React.FC = () => {
    const { name } = useParams<{ name: string }>() ?? ''

    const { data : pokemon, isFetching, error} = useFetchPokemonByNameQuery({name: name!})

    if (isFetching) return <Skeleton avatar paragraph={{ rows: 4 }} />
    if (error || !pokemon) return <Result
            status="404"
            title={error}
        />

    return <PokemonDetailsCard
        name={pokemon.name}
        imageSrc={pokemon.imageSrc}
        types={pokemon.types}
        height={pokemon.height}
        weight={pokemon.weight}
        hp={pokemon.hp}
        attack={pokemon.attack}
        defense={pokemon.defense}
    />
}
