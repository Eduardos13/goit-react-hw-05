import axios from 'axios';

export const fetchDayMovies = async () => {
  const responce = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      params: {
        api_key: '5d8bf2b2ccb9e545eda81c5c498af722',
      },
    }
  );
  return responce.data.results;
};

export const fetchWeekMovies = async () => {
  const responce = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/week',
    {
      params: {
        api_key: '5d8bf2b2ccb9e545eda81c5c498af722',
      },
    }
  );
  return responce.data.results;
};
