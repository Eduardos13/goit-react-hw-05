import React, { useEffect, useState } from 'react';
import { fetchWeekMovies } from '../../servises/api';
import MovieList from '../MovieList/MovieList';

const MoviesOfTheWeek = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    try {
      const getWeekMovies = async () => {
        const movies = await fetchWeekMovies();
        setMovies(movies);
      };
      getWeekMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesOfTheWeek;
