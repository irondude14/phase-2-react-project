import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const displayMovies = movies.map((movie) => {
    return (
      <div key={movie.id}>
        <MovieCard movie={movie} />
      </div>
    );
  });

  return (
    <div>
      <Filter />
      {displayMovies}
    </div>
  );
}
