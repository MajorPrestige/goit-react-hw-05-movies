import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCredits } from 'helpers/api';
import s from './movieCast.module.scss';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then(({ data }) => setCast(data.data.cast))
      .catch(err => setError(err.message));
  }, [movieId]);

  return (
    <>
      {error && <div>{error}</div>}
      <ul className={s.list}>
        {cast.map(({ character, name, profile_path }, idx) => (
          <li className={s.wrapper} key={idx}>
            {profile_path ? (
              <img
                width={'250px'}
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
            ) : (
              <img
                width={'250px'}
                src="https://vjoy.cc/wp-content/uploads/2020/06/znak_voprosa_46_17183646.png"
                alt={name}
              />
            )}
            <div className={s.inner}>
              <h2>{name}</h2>
              <p>{character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;
