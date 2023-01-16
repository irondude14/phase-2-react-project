import React, { useState } from 'react';

export default function MovieCard({ movie }) {
  const [showInfo, setShowInfo] = useState(false);

  function handleShowInfo() {
    setShowInfo(!showInfo);
  }
  return (
    <div className='movie-card' onClick={handleShowInfo}>
      <h3>{movie.title}</h3>
      <img src={movie.image} alt={movie.title + ' poster'} />
      {showInfo && (
        <div>
          <p>Release year: {movie.year}</p>
          <p>Description: {movie.description}</p>
        </div>
      )}
    </div>
  );
}
