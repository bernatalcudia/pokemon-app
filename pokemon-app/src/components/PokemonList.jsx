import React, { useState, useEffect } from 'react'

export const PokemonList = () => {

    const [pokemons, setPokemons] = useState([])
    const [searchQuery, setSearchQuery] = useState('pikachu')

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then((res) => res.json())
            .then((pokemonList) => {
                setPokemons(pokemonList.results)
            })
    }, [])
    return (
        <div>
            <h2>PokemonList</h2>
            {pokemons.map((pokemon) => {
                return (
                    <p key={pokemon.id}>
                        {pokemon.name}
                    </p>
                )
            })}
        </div>
    )
}

export default PokemonList