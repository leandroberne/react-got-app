import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';

const SearchChar = ({ setFirstName }) => {
  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFirstName(inputValue);
    setInputValue('');
  };

  const handleOnReset = (e) => {
    e.preventDefault();
    setFirstName(undefined);
    setInputValue('');
  };

  return (
    <div className='SearchChar'>
      <form onSubmit={handleOnSubmit}>
        <Input
          type='text'
          inverted
          icon='search'
          value={inputValue}
          onChange={handleOnChange}
          placeholder='Buscar...'
        />
      </form>
      <Button color='red' onClick={handleOnReset}>
        Reset
      </Button>
    </div>
  );
};

export default SearchChar;
