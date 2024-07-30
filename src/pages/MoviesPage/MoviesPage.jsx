import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import s from './MoviesPage.module.css';
import { fetchMovieByQuery } from '../../servises/api';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (query) {
      const getMovies = async () => {
        try {
          const results = await fetchMovieByQuery(query);
          setMovie(results);
        } catch (error) {
          console.log(error);
        }
      };
      getMovies();
    }
  }, [query]);

  const handleSearch = async () => {
    if (query.trim() === '') return;
    setSearchParams({ query });
  };

  const handleQueryChange = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <SearchBar
        value={query}
        handleSearch={handleSearch}
        setQuery={handleQueryChange}
      />
      <MovieList movies={movie} />
    </div>
  );
};

export default MoviesPage;
