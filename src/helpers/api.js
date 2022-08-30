import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '63a5436f31e8ed5d869f5df89d5791bc',
};

export const fetchPopularMovie = async () => {
  const data = await axios.get('/trending/movie/day');
  return { data };
};

export const fetchMovieDetails = async movieId => {
  const data = await axios.get(`/movie/${movieId}`);
  return { data };
};

export const fetchMovieCredits = async movieId => {
  const data = await axios.get(`/movie/${movieId}/credits`);

  return { data };
};

export const fetchMovieReviews = async movieId => {
  const data = await axios.get(`/movie/${movieId}/reviews`);

  return { data };
};

export const fetchMovieByQuery = async query => {
  const data = await axios.get('/search/movie', {
    params: {
      query,
    },
  });

  return { data };
};
