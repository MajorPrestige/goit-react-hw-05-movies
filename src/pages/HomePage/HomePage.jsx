import { useState, useEffect } from 'react';
import { fetchPopularMovie } from 'helpers/api';
import { Link } from 'react-router-dom';

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
    <section>
      <h1>Trending today</h1>
      <ul>
        {movies?.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomePage;
