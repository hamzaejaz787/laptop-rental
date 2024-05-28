import React from 'react';
import { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
const handleSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        onChange={handleSearch}
      />
      <h2>Recent Blogs</h2>
      <ul>
        <li>
          <a href="#">Lorem Ipsum lot</a>
          <p>Lorum Ipsum</p>
        </li>
        <li>
          <a href="#">Lorem Ipsum lot</a>
          <p>Lorum Ipsum</p>
        </li>
        <li>
          <a href="#">Lorem Ipsum lot</a>
          <p>Lorum Ipsum</p>
        </li>
      </ul>
      <h2>Popular Tags</h2>
      <ul>
        <li>
          <a href="#">Event Planning</a>
        </li>
        <li>
          <a href="#">Tech Rental Products</a>
        </li>
        <li>
          <a href="#">Rental Products</a>
        </li>
        <li>
          <a href="#">Event Rental</a>
        </li>
      </ul>
    </div>
  );
};

export default Search;