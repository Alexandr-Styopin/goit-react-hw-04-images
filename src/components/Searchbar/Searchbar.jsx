import { useState } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm/SearchForm';
import css from './Searchbar.module.css';

export default function Searchbar({ handleFormSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleSearchChange = e => {
    e.preventDefault();
    setInputValue(e.target.value.trim());
  };

  const handleSaerchSubmit = e => {
    e.preventDefault();
    handleFormSubmit(inputValue);
  };

  return (
    <header className={css.Searchbar}>
      <SearchForm onSubmit={handleSaerchSubmit} onChange={handleSearchChange} />
    </header>
  );
}
SearchForm.propTypes = { onSubmit: PropTypes.func, onChange: PropTypes.func };
