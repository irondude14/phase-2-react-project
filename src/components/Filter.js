import React, { useState } from 'react';

export default function Filter() {
  const [sortBy, setSortBy] = useState('none');
  return (
    <>
      <select defaultValue={'none'}>
        <label>Sort By:</label>
        <option value='none'>None</option>
        <option value='year'>Year</option>
      </select>
    </>
  );
}
