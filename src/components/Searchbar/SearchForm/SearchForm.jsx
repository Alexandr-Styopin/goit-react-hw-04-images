import css from './SearchForm.module.css';
export default function SearchForm({ onSubmit, onChange }) {
  return (
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={css.SearchFormButton}>
        <span className={css.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        onChange={onChange}
        className={css.SearchFormInput}
        type="text"
        name="input"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
}
