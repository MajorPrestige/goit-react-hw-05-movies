import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import s from './searchMoviesPage.module.scss';
import { fetchMovieByQuery } from 'helpers/api';

const SearchMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState(null);
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
        .catch(err => setErr(err.message));
    }
  }, [search]);

  return (
    <>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit}>
          <label className={s.label}>
            <input name="movieName" className={s.input} type="text" />
            <button className={s.btn} type="submit">
              Search
            </button>
          </label>
        </form>
        {err && <div>{err}</div>}
        <ul className={s.list}>
          {movies.map(({ id, title, poster_path }) => (
            <li className={s.item} key={id}>
              <Link className={s.link} to={`/movies/${id}`}>
                <img
                  width={'250px'}
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                />
                <h2 className={s.descr}>{title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchMoviesPage;
