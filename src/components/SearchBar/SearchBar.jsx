import React from 'react';
import s from './SearchBar.module.css';

const SearchBar = ({ value, handleSearch, setQuery }) => {
  return (
    <div className={s.searchBarWrapper}>
      <h2 className={s.title}>Search for a movie...</h2>
      <div className={s.inputWrapper}>
        <input
          type="search"
          value={value}
          className={s.input}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          placeholder="Search..."
        />
        <button onClick={handleSearch} type="submit" className={s.searchBtn}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
