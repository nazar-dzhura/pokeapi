import React from 'react'
import {Button, Empty, List, Result} from "antd";
import {useFetchPokemonsQuery} from "../../../shared/api/pokemon";
import {PokemonCard} from "../../../entities/pokemon/pokemon-card";
import {DEFAULT_POKEMON_LIMIT, POKEMON_COUNT} from "../../../shared/consts/pokemon";
import useQueryParamSetter from "../../../shared/hooks/useQueryParamSetter";
import {useQueryParam} from "../../../shared/hooks/useQueryParam";
import {QueryParams} from "../../../shared/consts/query-params";

export const PokemonsGrid: React.FC = () => {
    const page = Number(useQueryParam(QueryParams.PAGE)) || 1
    const setQueryParam = useQueryParamSetter()
    const offset = (page - 1) * DEFAULT_POKEMON_LIMIT

    const {data: pokemons, isFetching, error, refetch} = useFetchPokemonsQuery({limit: DEFAULT_POKEMON_LIMIT, offset: offset})

    const onPageChange = (page: number) => setQueryParam({[QueryParams.PAGE]: page})

    if (error) return <Result
            status="error"
            title="Pokemons fetch failed"
            subTitle={error}
            extra={[<Button key="try" onClick={() => refetch()} loading={isFetching}>Try Again</Button>]}
        />

    return <List
        grid={{gutter: 16, column: 4, xs: 1, sm: 1, md: 2, lg: 3, xl: 4, xxl: 4}}
        dataSource={pokemons}
        locale={{emptyText: <Empty description={`There are no any pokemons.`} />}}
        loading={{spinning: isFetching, tip: 'Loading pokemons...'}}
        pagination={{
            onChange: onPageChange,
            current: page,
            pageSize: DEFAULT_POKEMON_LIMIT,
            total: POKEMON_COUNT
        }}
        renderItem={pokemon => (
            <List.Item key={pokemon.name}>
                <PokemonCard name={pokemon.name} imageSrc={pokemon.imageSrc}/>
            </List.Item>
        )}
    />
}
