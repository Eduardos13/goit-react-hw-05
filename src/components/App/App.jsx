import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
const MoviesOfTheDay = lazy(() => import('../MoviesOfTheDay/MoviesOfTheDay'));
const MoviesOfTheWeek = lazy(() =>
  import('../MoviesOfTheWeek/MoviesOfTheWeek')
);
const Cast = lazy(() => import('../MovieCast/MovieCast'));
const Reviews = lazy(() => import('../MovieReviews/MovieReviews'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

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
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
