import React, { useEffect, useState } from 'react';
import Character from './Character';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import SearchChar from './SearchChar';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [firstName, setFirstName] = useState(undefined);

  const firstNameFiltered =
    firstName && firstName.toLocaleLowerCase().replace(/ /g, '');

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then((res) => res.json())
      .then((data) => {
        setCharacters(
          firstName
            ? data.filter(
                (element) =>
                  element.firstName.toLocaleLowerCase() === firstNameFiltered
              )
            : data
        );
      });

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [firstName, firstNameFiltered]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1 style={{ color: 'white' }}>Personajes</h1>
          <SearchChar setFirstName={setFirstName} />
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
