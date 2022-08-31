import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from 'pages/HomePage/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';
import SearchMoviesPage from 'pages/SearchMoviesPage/SearchMoviesPage';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<HomePage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />}></Route>
          <Route path="reviews" element={<MovieReviews />}></Route>
        </Route>
        <Route path="/movies" element={<SearchMoviesPage />}></Route>
      </Routes>
    </>
  );
};
