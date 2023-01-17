import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import MovieList from './MovieList';
import Footer from './Footer';
import Home from './Home';
import MovieForm from './MovieForm';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route path='home' element={<Home />} />
          <Route path='movielist' element={<MovieList />} />
          <Route path='movieform' element={<MovieForm />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
