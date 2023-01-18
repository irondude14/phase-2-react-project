import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';

export default function MovieList({ movies }) {
  const [sortBy, setSortBy] = useState('none');

  const sortedMovies = [...movies].sort((movieA, movieB) => {
    if (sortBy === 'none') {
      return true;
    } else if (sortBy === 'year') {
      return movieA.year - movieB.year;
    } else if (sortBy === 'title') {
      return movieA.title
        .toUpperCase()
        .localeCompare(movieB.title.toUpperCase());
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
    <div className='movie-list'>
      <Filter setSortBy={setSortBy} />
      {displayMovies}
    </div>
  );
}
