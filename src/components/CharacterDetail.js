import React, { useEffect, useState } from 'react';

const CharacterDetail = ({ match }) => {
  const [character, setCharacter] = useState([]);
  console.log(character);

  const charId = match.params.id;

  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters/${charId}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [charId]);

  return (
    <div className='CharacterDetail'>
      <h1>DETAIL</h1>
    </div>
  );
};

export default CharacterDetail;
