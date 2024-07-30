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

export const fetchMovieById = async (id) => {
  const responce = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: '5d8bf2b2ccb9e545eda81c5c498af722',
    },
  });
  return responce.data;
};

export const fetchMovieByQuery = async (query) => {
  const responce = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        api_key: '5d8bf2b2ccb9e545eda81c5c498af722',
        query: query,
        language: 'en-US',
        page: 1,
        include_adult: false,
      },
    }
  );
  return responce.data.results;
};

export const fetchMovieCast = async (id) => {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    {
      params: {
        api_key: '5d8bf2b2ccb9e545eda81c5c498af722',
      },
    }
  );
  return responce.data.cast;
};

export const fetchMovieReviews = async (id) => {
  const responce = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews`,
    {
      params: {
        api_key: '5d8bf2b2ccb9e545eda81c5c498af722',
      },
    }
  );
  return responce.data.results;
};
