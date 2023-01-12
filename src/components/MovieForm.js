import React, { useState } from 'react';

export default function MovieForm() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      title,
      year,
      description,
      image,
    };
    console.log(
      '🚀 ~ file: MovieForm.js:12 ~ handleSubmit ~ formData',
      formData
    );
    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add A Movie</h2>
      <label htmlFor='title'>Movie Name:</label>
      <input
        type='text'
        id='movieName'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
