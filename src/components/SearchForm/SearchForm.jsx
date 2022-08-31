import s from './searchForm.module.scss';

const SearchForm = ({ handleSubmit }) => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <input name="movieName" className={s.input} type="text" />
        <button className={s.btn} type="submit">
          Search
        </button>
      </label>
    </form>
  );
};

export default SearchForm;
