import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import MovieList from './MovieList';
import About from './About';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route path='movielist' element={<MovieList />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}
