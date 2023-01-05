import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import MoviesList from './MoviesList';
import About from './About';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route path='movielist' element={<MoviesList />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}
