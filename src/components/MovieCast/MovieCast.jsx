import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../servises/api';
import s from './MovieCast.module.css';

const MovieCast = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(params.movieId).then(setCast);
  }, [params.movieId]);
  return (
    <div>
      <h2 className={s.castTitle}>Cast</h2>
      <ul className={s.castList}>
        {cast.map((actor) => (
          <li key={actor.id} className={s.castListItem}>
            <p>
              {actor.name} as {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
