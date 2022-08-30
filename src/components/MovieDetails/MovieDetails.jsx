import s from './movieDetails.module.scss';

const MovieDetails = ({ ...p }) => {
  return (
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
  );
};

export default MovieDetails;
