import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const CharacterDetail = ({ match }) => {
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const charId = match.params.id;

  useEffect(() => {
    axios(`https://thronesapi.com/api/v2/Characters/${charId}`).then(
      (response) => setCharacter(response.data)
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [charId]);

  return (
    <>
      {isLoading && <Spinner />}
      <div className='CharacterDetail'>
        <h1>{character.fullName}</h1>
        <div className='CharDetail'>
          <div className='CharDetail-image'>
            <img src={character.imageUrl} alt='Imagen de Personaje' />
          </div>
          <div className='CharDetail-content'>
            <p>Nombre: {character.firstName}</p>
            <p>Apellido: {character.lastName}</p>
            <p>Titulo: {character.title}</p>
            <p>House: {character.family}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetail;
