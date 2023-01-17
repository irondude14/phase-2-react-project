import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import MovieList from './MovieList';
import Footer from './Footer';
import Home from './Home';
import MovieForm from './MovieForm';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route exact path='/' element={<Navigate to='/home' />} />
          <Route path='home' element={<Home />} />
          <Route path='movielist' element={<MovieList />} />
          <Route path='movieform' element={<MovieForm />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
