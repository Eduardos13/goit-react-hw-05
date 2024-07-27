import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  return (
    <div>
      <SearchBar />
      <ul className={s.buttonsList}>
        <li className={s.buttonsItem}>
          <NavLink to="popularofday"> Movies of the Day</NavLink>
        </li>
        <li className={s.buttonsItem}>
          <NavLink to="popularofweek"> Movies of the Week</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MoviesPage;
