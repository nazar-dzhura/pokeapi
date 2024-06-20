const Routes = {
    HOME: '/',
    POKEMONS: '/pokemon',
    POKEMON_DETAIL: '/pokemon/:name',
    NOT_FOUND: '*',
} as const

type RouteKeys = keyof typeof Routes

export default Routes
export type { RouteKeys }