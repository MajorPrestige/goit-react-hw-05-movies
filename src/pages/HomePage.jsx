import { useState, useEffect } from 'react';
import { fetchPopularMovie } from 'helpers/api';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (movies.length > 0) {
      return;
    }

    setLoading(true);

    fetchPopularMovie()
      .then(({ data }) => {
        setMovies(data.data.results);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movies.length]);

  return (
    <Section title={'Popular movies'}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <MovieGallery movies={movies} />
    </Section>
  );
};

export default HomePage;
