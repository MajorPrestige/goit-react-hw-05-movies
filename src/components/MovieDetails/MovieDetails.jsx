import { NavLink } from 'react-router-dom';
import s from './movieDetails.module.scss';

const classNameForLink = ({ isActive }) => {
  return isActive ? s.activeLink : s.Link;
};

const MovieDetails = ({ ...p }) => {
  return (
    <>
      <div className={s.wrapper}>
        <img
          width={'300px'}
          src={`https://image.tmdb.org/t/p/w500${p.img}`}
          alt="poster"
        />
        <div className={s.inner}>
          <h2>{p.title}</h2>
          <p>Rating: {p.rating}</p>
          <h3>Overview</h3>
          <p className={s.overview}>{p.overview}</p>
          <h3>Genres</h3>
          <ul>
            {p.genres.map(({ name }, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <button className={s.btn} type="button" onClick={p.goBack}>
        go back
      </button>
      <div className={s.linkWrapper}>
        <NavLink className={classNameForLink} to="cast">
          Cast
        </NavLink>
        <NavLink className={classNameForLink} to="reviews">
          Reviews
        </NavLink>
      </div>
    </>
  );
};

export default MovieDetails;
