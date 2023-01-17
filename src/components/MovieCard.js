import React, { useState } from 'react';

export default function MovieCard({ movie }) {
  const [showInfo, setShowInfo] = useState(false);
  const [remove, setRemove] = useState(false);

  function handleShowInfo() {
    setShowInfo(!showInfo);
  }

  function handleDelete() {
    fetch('http://localhost:3000/movies/' + movie.id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    setRemove(!remove);
  }

  return (
    <div className='movie-card' onClick={handleShowInfo}>
      <h3>{movie.title}</h3>
      <img src={movie.image} alt={movie.title + ' poster'} />
      {showInfo && (
        <div>
          <p>Release year: {movie.year}</p>
          <p>Description: {movie.description}</p>
          <button id='deleteBtn' onClick={handleDelete}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
}
