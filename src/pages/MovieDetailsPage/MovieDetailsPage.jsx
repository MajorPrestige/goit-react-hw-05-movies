import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import s from './movieDetailsPage.module.scss';
import { fetchMovieDetails } from 'helpers/api';
import MovieDetails from 'components/MovieDetails/MovieDetails';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(movieId).then(({ data }) => setMovie(data.data));
  }, [movieId]);

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
    </section>
  );
};

export default MovieDetailsPage;
