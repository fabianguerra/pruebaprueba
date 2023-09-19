import { FC } from "react"
import { PokemonCard } from "./componente/pokemonCard"

export const Pokemon : FC = () => {
    return <>
        <h2>Pokemon page</h2>
        <PokemonCard />
    </>
}