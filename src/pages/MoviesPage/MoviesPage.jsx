import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import s from './MoviesPage.module.css';
import { fetchMovieByQuery } from '../../servises/api';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);
  const handleSearch = async () => {
    if (query.trim() === '') return;
    try {
      const results = await fetchMovieByQuery(query);
      setMovie(results);
    } catch (error) {
      console.log(error);
    }
    fetchMovieByQuery(query).then(setMovie);
  };
  return (
    <div>
      <SearchBar
        value={query}
        handleSearch={handleSearch}
        setQuery={setQuery}
      />
      <MovieList movies={movie} />
    </div>
  );
};

export default MoviesPage;
