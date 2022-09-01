import { Link, useLocation } from 'react-router-dom';
import s from './movieGallery.module.scss';

const MovieGallery = ({ movies }) => {
  const location = useLocation();
  console.log(location);

  return (
    <ul className={s.list}>
      {movies.map(({ id, title, poster_path }) => (
        <li className={s.item} key={id}>
          <Link
            className={s.link}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            {poster_path ? (
              <img
                width={'250px'}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
              />
            ) : (
              <img
                width={'250px'}
                src={`https://vjoy.cc/wp-content/uploads/2020/06/znak_voprosa_46_17183646.png`}
                alt={title}
              />
            )}
            <h2 className={s.descr}>{title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieGallery;
