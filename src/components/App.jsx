import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from 'pages/HomePage/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </>
  );
};
