import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../servises/api';

const MovieReviews = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(params.movieId).then(setReviews);
  }, [params.movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>
              {review.author}: {review.content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
