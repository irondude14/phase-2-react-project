import React, { useState } from 'react';

export default function MovieForm() {
  const [movieName, setMovieName] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      movieName,
      year,
      description,
      image,
    };
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add A Movie</h2>
      <label htmlFor='movieName'>Movie Name:</label>
      <input
        type='text'
        id='movieName'
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />

      <label htmlFor='year'>Year of the release:</label>
      <input
        type='text'
        id='year'
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <label htmlFor='description'>Movie description:</label>
      <input
        type='text'
        id='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor='image'>Movie poster:</label>
      <input
        type='text'
        id='image'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <img
        src='https://www.wallpapertip.com/wmimgs/24-247100_14-movie-collage.jpg'
        alt='poster preview'
      />

      <input type='submit' value='Add A Movie' />
    </form>
  );
}
