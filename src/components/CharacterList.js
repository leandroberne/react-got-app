import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios(`https://thronesapi.com/api/v2/Characters`).then((response) =>
      setCharacters(response.data)
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1 style={{ color: 'white' }}>Personajes</h1>
          <div className='CharacterList'>
            {characters.map((character) => {
              return (
                <Link key={character.id} to={`/${character.id}`}>
                  <Character data={character} />
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default CharacterList;
