import React, { Suspense, lazy } from 'react';
import Header from '../Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);
import MoviesOfTheDay from '../MoviesOfTheDay/MoviesOfTheDay';
import MoviesOfTheWeek from '../MoviesOfTheWeek/MoviesOfTheWeek';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';
const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<Navigate to="popularofday" replace />} />
            <Route path="popularofday" element={<MoviesOfTheDay />} />
            <Route path="popularofweek" element={<MoviesOfTheWeek />} />
          </Route>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
