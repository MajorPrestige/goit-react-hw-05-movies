import { useEffect, useState } from 'react';
import { useParams, useNavigate, Outlet, NavLink } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
import s from './movieDetailsPage.module.scss';
import { fetchMovieDetails } from 'helpers/api';
import MovieDetails from 'components/MovieDetails/MovieDetails';

const classNameForLink = ({ isActive }) => {
  return isActive ? s.activeLink : s.Link;
};

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(({ data }) => setMovie(data.data))
      .catch(err => setError(err.message));
  }, [movieId]);

  const navigate = useNavigate();
  const goBack = () => navigate('/');

  return (
    <section>
      {!movie && <Audio height="80" width="80" radius="9" color="blue" />}
      {error && <div>{error}</div>}
      {movie && (
        <>
          <MovieDetails
            img={movie.poster_path}
            title={movie.original_title}
            rating={movie.vote_average}
            overview={movie.overview}
            genres={movie.genres}
          />
          <button className={s.btn} type="button" onClick={goBack}>
            go back
          </button>
          <div className={s.linkWrapper}>
            <NavLink className={classNameForLink} to="cast">
              Cast
            </NavLink>
            <NavLink className={classNameForLink} to="reviews">
              Reviews
            </NavLink>
          </div>
        </>
      )}

      <Outlet />
    </section>
  );
};

export default MovieDetailsPage;
