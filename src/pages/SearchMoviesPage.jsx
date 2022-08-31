import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'helpers/api';
import Section from 'components/Section/Section';
import MovieGallery from 'components/MovieGallery/MovieGallery';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import SearchForm from 'components/SearchForm/SearchForm';

const SearchMoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
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
      fetchMovieByQuery(search)
        .then(({ data }) => setMovies(data.data.results))
        .catch(error => setError(error.message));
    }
  }, [search]);

  return (
    <Section>
      <SearchForm handleSubmit={handleSubmit} />
      {movies && <MovieGallery movies={movies} />}
      {error && <ErrorMessage />}
    </Section>
  );
};

export default SearchMoviesPage;
