import React, { useState, useEffect } from 'react'
import { CharacterItem } from '../../Molecules/CharacterItem/CharacterItem'

import './PokemonList.scss'

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then((res) => res.json())
            .then((pokemonList) => {
                setPokemons(pokemonList.results)
            })
    }, [])
    return (
        <>
            <h2>Pokemons</h2>
            <div className='pokemonsContainer'>
                {pokemons.map((pokemon, index) => {
                    return (
                        <CharacterItem name={pokemon.name} img={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`} key={index} />
                    )
                })}
            </div>
        </>
    )
}

export { PokemonList }