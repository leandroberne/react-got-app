import React, { useState } from 'react';

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

  return (
    <div className='SearchChar'>
      <form onSubmit={handleOnSubmit}>
        <input type='text' value={inputValue} onChange={handleOnChange} />
      </form>
    </div>
  );
};

export default SearchChar;
