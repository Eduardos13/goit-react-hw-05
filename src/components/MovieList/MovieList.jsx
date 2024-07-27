import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <div className={s.moviesWrapper}>
      <ul className={s.moviesList}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.moviesItem}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
