import React from 'react';

export default function Filter() {
  return (
    <>
      <select>
        <label>Sort By:</label>
        <option value='none'>None</option>
        <option value='year'>Year</option>
      </select>
    </>
  );
}
