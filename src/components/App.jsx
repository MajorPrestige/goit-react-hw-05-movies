import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './Header/Header';
import Loader from './Loader/Loader';
const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const SearchMoviesPage = lazy(() => import('pages/SearchMoviesPage'));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="*" element={<HomePage />}></Route>
          <Route path="/movies" element={<SearchMoviesPage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />}></Route>
            <Route path="reviews" element={<MovieReviews />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
