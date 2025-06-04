import React, { useState, useEffect } from 'react'
import PokemonItem from '../Molecules/PokemonItem'

export const PokemonList = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then((res) => res.json())
            .then((pokemonList) => {
                setPokemons(pokemonList.results)
            })
    }, [])
    return (
        <div>
            <h2>Pokedex</h2>
            {pokemons.map((pokemon, index) => {
                return (
                    <PokemonItem name={pokemon.name} key={index} />
                )
            })}
        </div>
    )
}

export default PokemonList