import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState(
    'https://wallpapercave.com/wp/wp4064011.jpg'
  );
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

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
    })
      .then((r) => r.json())
      .then((data) => {
        onAddMovie(data);
        setTitle('');
        setYear('');
        setImage('https://wallpapercave.com/wp/wp4064011.jpg');
        setDescription('');
        navigate('/movielist');
      });
    // clear form fields after the submission
  }

  return (
    <form className='submission-form' onSubmit={handleSubmit}>
      <h3>Add Movie</h3>
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
