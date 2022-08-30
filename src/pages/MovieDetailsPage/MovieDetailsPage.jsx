import { useEffect, useState } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import s from './movieDetailsPage.module.scss';
import { fetchMovieDetails } from 'helpers/api';
import MovieDetails from 'components/MovieDetails/MovieDetails';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(movieId).then(({ data }) => setMovie(data.data));
  }, [movieId]);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section>
      {movie && (
        <MovieDetails
          img={movie.poster_path}
          title={movie.original_title}
          rating={movie.vote_average}
          overview={movie.overview}
          genres={movie.genres}
        />
      )}
      <button className={s.btn} type="button" onClick={goBack}>
        go back
      </button>
      <br />
      <Outlet />
    </section>
  );
};

export default MovieDetailsPage;
