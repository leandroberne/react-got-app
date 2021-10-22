import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  console.log(characters);

  useEffect(() => {
    axios(`https://thronesapi.com/api/v2/Characters`).then((response) =>
      setCharacters(response.data)
    );
  }, []);

  return (
    <div className='CharacterList'>
      {characters.map((character) => {
        return <Character key={character.id} data={character} />;
      })}
    </div>
  );
};

export default CharacterList;
