import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../servises/api';

const MovieCast = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(params.movieId).then(setCast);
  }, [params.movieId]);
  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
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
