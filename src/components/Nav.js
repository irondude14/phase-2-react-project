import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <h2>My Movie List</h2>
      <img alt='movie-list-logo'></img>
      <nav>
        <Link to='/home'>Home </Link>
        <Link to='/movieslist'>Movies List </Link>
        <Link to='/movieform'>Add a Movie</Link>
        <Link to='/about'>About</Link>
      </nav>

      <Outlet />
    </div>
  );
}
