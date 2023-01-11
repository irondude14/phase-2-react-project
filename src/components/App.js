import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import MoviesList from './MoviesList';
import About from './About';
import Home from './Home';
import MovieForm from './MovieForm';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route path='home' element={<Home />} />
          <Route path='movieslist' element={<MoviesList />} />
          <Route path='movieform' element={<MovieForm />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}
