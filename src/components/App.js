import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './NavBar';
import MovieList from './MovieList';
import Footer from './Footer';
import Home from './Home';
import MovieForm from './MovieForm';

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  function addMovie(newMovie) {
    setMovies([...movies, newMovie]);
  }

  function removeMovie(id) {
    setMovies(movies.filter((movie) => movie.id != id));
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route exact path='/' element={<Navigate to='/home' />} />
          <Route path='home' element={<Home />} />
          <Route
            path='movielist'
            element={<MovieList movies={movies} onRemoveMovie={removeMovie} />}
          />
          <Route
            path='movieform'
            element={<MovieForm onAddMovie={addMovie} />}
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
