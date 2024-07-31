import React, { useEffect, useState } from 'react';
import { fetchTrandingMovies } from '../../servises/api';
import MovieList from '../../components/MovieList/MovieList';

// import { NavLink, Outlet } from 'react-router-dom';
// import s from './HomePage.module.css';
// import clsx from 'clsx';

const HomePage = () => {
  const [tremdingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrandingMovies();
        setTrandingMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getTrendingMovies();
  }, []);
  return (
    <div>
      {/* <ul className={s.buttonsList}>
        <li className={s.buttonsItem}>
          <NavLink
            to="popularofday"
            className={({ isActive }) =>
              clsx(s.link, { [s.activeLink]: isActive })
            }
          >
            Movies of the Day
          </NavLink>
        </li>
        <li className={s.buttonsItem}>
          <NavLink
            to="popularofweek"
            className={({ isActive }) =>
              clsx(s.link, { [s.activeLink]: isActive })
            }
          >
            Movies of the Week
          </NavLink>
        </li>
      </ul> */}
      <MovieList movies={tremdingMovies} />
      {/* <Outlet /> */}
    </div>
  );
};

export default HomePage;
