import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'helpers/api';
import s from './movieReviews.module.scss';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [err, setErr] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(({ data }) => setReviews(data.data.results))
      .catch(err => setErr(err.message));
  }, [movieId]);

  return (
    <>
      {err && <div>{err}</div>}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content }) => {
            return (
              <li key={author}>
                <h2>{author}</h2>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={s.results}>No results...</div>
      )}
    </>
  );
};

export default MovieReviews;
