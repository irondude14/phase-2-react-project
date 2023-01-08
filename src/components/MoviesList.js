import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState('none');

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  let sortedMovies = movies.sort((movieA, movieB) => {
    if (sortBy === 'none') {
      return movies;
    } else if (sortBy === 'year') {
      return movieA.year - movieB.year;
    }
  });

  const displayMovies = sortedMovies.map((movie) => {
    return (
      <div key={movie.id}>
        <MovieCard movie={movie} />
      </div>
    );
  });

  return (
    <div>
      <Filter setSortBy={setSortBy} />
      {displayMovies}
    </div>
  );
}
