import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchMovieById } from '../../servises/api';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieById(params.movieId).then(setMovie);
  }, [params.movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div>
      <button onClick={() => navigate(-1)}> Go back</button>
      <div className={s.detailsWraper}>
        <img src={posterUrl} alt="" />
        <div className={s.movieDetails}>
          <h2>{movie.original_title}</h2>
          <p>User score: {Math.round((movie.vote_average * 100) / 10)} %</p>
          <p>Overwie: {movie.overview}</p>
        </div>
      </div>
      <ul>
        <li>
          <NavLink to={`/movies/${params.movieId}/cast`}> Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${params.movieId}/reviews`}> Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
