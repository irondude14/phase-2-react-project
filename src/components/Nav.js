import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <h2>My Movie List</h2>
      <img alt='movie-list-logo'></img>
      <NavLink to='/movielist' exact>
        MovieList
      </NavLink>
      <NavLink to='/about' exact>
        About
      </NavLink>
    </div>
  );
}
