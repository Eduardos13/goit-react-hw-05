import React from 'react';
import Header from '../Header/Header';
import { Routes, Route, Outlet } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import MoviesOfTheDay from '../MoviesOfTheDay/MoviesOfTheDay';
import MoviesOfTheWeek from '../MoviesOfTheWeek/MoviesOfTheWeek';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="popularofday" element={<MoviesOfTheDay />} />
          <Route path="popularofweek" element={<MoviesOfTheWeek />} />
        </Route>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
