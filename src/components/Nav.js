import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='header'>
      <h2>My Movie List</h2>
      <nav className='nav'>
        <ul className='nav-list'>
          <Link to='/home'>Home </Link>
          <Link to='/movielist'>Movie List </Link>
          <Link to='/movieform'>Add a Movie</Link>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
