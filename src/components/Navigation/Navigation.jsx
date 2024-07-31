import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';

const activeLink = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <nav className={s.navigationList}>
      <NavLink to="/" className={activeLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={activeLink}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
