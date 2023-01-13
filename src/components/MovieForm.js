import React, { useState } from 'react';

export default function MovieForm() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const alt =
    'https://pbs.twimg.com/media/D_tqrc8XYAEExdd?format=jpg&name=large';

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      title,
      year,
      description,
      image,
    };
    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  }

  return (
    <form className='submission-form' onSubmit={handleSubmit}>
      <h2>Add A Movie</h2>
      <label htmlFor='title'>Movie Title:</label>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor='year'>Year of the release:</label>
      <input
        type='text'
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <label htmlFor='description'>Movie description:</label>
      <textarea
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor='image'>Movie poster:</label>
      <input
        type='text'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <img src={image} alt={'Poster Preview'} />

      <input type='submit' value='Add A Movie' id='submitBtn' />
    </form>
  );
}
