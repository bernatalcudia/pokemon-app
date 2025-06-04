import { useEffect, useState } from 'react'
import { CharacterItem } from '../../Molecules/CharacterItem/CharacterItem'
import './DragonBallList.scss'

const DragonBallList = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {

        fetch('https://dragonball-api.com/api/characters')
            .then((res) => res.json())
            .then((characterList) => {
                console.log(characterList)
                setCharacters(characterList.items);
            });
    }, []);

    return (
        <>
            <h2>Dragon Ball</h2>
            <div className='charactersContainer'>
                {characters.map((character) => {
                    return <CharacterItem name={character.name} img={character.image} key={character.id} />;
                })}
            </div>
        </>
    );
};

export { DragonBallList }