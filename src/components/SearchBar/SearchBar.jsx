import React from 'react';
import s from './SearchBar.module.css';

const SearchBar = ({ value, handleSearch, setQuery }) => {
  const onSubmit = (event) => {
    event.prevent.default();
    handleSearch();
  };
  return (
    <div className={s.searchBarWrapper}>
      <h2 className={s.title}>Search for a movie...</h2>
      <form className={s.inputWrapper} onSubmit={onSubmit}>
        <input
          type="search"
          value={value}
          className={s.input}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          placeholder="Search..."
        />
        {/* <button type="submit" className={s.searchBtn}>
          Search
        </button> */}
      </form>
    </div>
  );
};

export default SearchBar;
