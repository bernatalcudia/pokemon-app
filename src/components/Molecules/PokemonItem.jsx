import React from 'react'

function PokemonItem({ name }) {
    return (
        <>
            <img src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
                alt={`${name}.png`}></img>
            <p >
                {name}
            </p>
        </>
    )
}

export default PokemonItem