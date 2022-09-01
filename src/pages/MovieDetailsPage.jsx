import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'helpers/api';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Section from 'components/Section/Section';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prevPage = location.state?.from ?? '/';

  useEffect(() => {
    setLoading(true);
    fetchMovieDetails(movieId)
      .then(({ data }) => setMovie(data.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [movieId]);

  const goBack = () => navigate(prevPage);

  return (
    <Section>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movie && (
        <MovieDetails
          img={movie.poster_path}
          title={movie.original_title}
          rating={movie.vote_average}
          overview={movie.overview}
          genres={movie.genres}
          goBack={goBack}
        />
      )}
      <Outlet />
    </Section>
  );
};

export default MovieDetailsPage;
