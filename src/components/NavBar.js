import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <h1>
        <Link className='Link' to='/'>
          Home
        </Link>
      </h1>
    </div>
  );
};

export default NavBar;
