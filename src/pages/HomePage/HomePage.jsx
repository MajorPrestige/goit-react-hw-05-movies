import { useState, useEffect } from 'react';
import { fetchPopularMovie } from 'helpers/api';
import { Link } from 'react-router-dom';
import s from './homePage.module.scss';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length > 0) {
      return;
    }

    fetchPopularMovie()
      .then(({ data }) => setMovies(data.data.results))
      .catch(err => console.log(err));
  }, [movies.length]);

  return (
    <section className={s.wrapper}>
      <h1 className={s.title}>Trending today</h1>
      <ul className={s.list}>
        {movies?.map(({ id, title, poster_path }) => (
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
    </section>
  );
};

export default HomePage;
