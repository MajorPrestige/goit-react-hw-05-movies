import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'helpers/api';
import Section from 'components/Section/Section';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';

const SearchMoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('value');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.movieName.value;
    setSearchParams({ value });
    form.reset();
  };

  useEffect(() => {
    if (search) {
      setLoading(true);

      fetchMovieByQuery(search)
        .then(({ data }) => setMovies(data.data.results))
        .catch(error => setError(error.message))
        .finally(() => setLoading(false));
    }
  }, [search]);

  return (
    <Section>
      <SearchForm handleSubmit={handleSubmit} />
      {loading && <Loader />}
      {movies && <MovieGallery movies={movies} />}
      {(movies?.length === 0 || error) && <ErrorMessage />}
    </Section>
  );
};

export default SearchMoviesPage;
