import './PokemonItem.scss'

function PokemonItem({ name }) {
    return (
        <>
            <div className='pokemonItemContainer'>
                <img src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
                    alt={`${name}.png`}></img>
                <p >
                    {name}
                </p>
            </div>
        </>
    )
}

export default PokemonItem