import React, { useState } from 'react';

export default function Filter({ setSortBy }) {
  function handleSort(event) {
    setSortBy(event.target.value);
  }

  return (
    <>
      <label>Sort By: </label>
      <select onChange={handleSort}>
        <option value='none'>None</option>
        <option value='year'>Year</option>
      </select>
    </>
  );
}
