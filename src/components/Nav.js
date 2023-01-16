import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='header'>
      <h2>My Movie List</h2>
      <img
        src='https://www.clipartkey.com/mpngs/m/169-1697851_movies-logo-transparent.png'
        alt='movie-list-logo'
      ></img>
      <nav className='nav'>
        <ul className='nav-list'>
          <Link to='/home'>Home </Link>
          <Link to='/movielist'>Movie List </Link>
          <Link to='/movieform'>Add a Movie</Link>
          <Link to='/about'>About</Link>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
