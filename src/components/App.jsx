import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../components/App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export function App() {
  const [formValue, setFormValue] = useState('');

  const handleFormSubmit = searchData => {
    setFormValue(searchData);
  };
  return (
    <div className={css.App}>
      <Searchbar handleFormSubmit={handleFormSubmit} />
      <ImageGallery formValue={formValue} />
    </div>
  );
}

Searchbar.propTypes = { handleFormSubmit: PropTypes.func };
ImageGallery.propTypes = { formValue: PropTypes.string };
