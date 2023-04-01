import { useState, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import css from '../components/App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ServiceAPI from './ServiceAPI/ServiceAPI';
import Loader from './Loader/Loader';
import Button from './Button/Button';

export function App() {
  const [images, setImages] = useState([]);
  const [pageValue, setPageValue] = useState(1);
  const [loader, setLoader] = useState(false);
  const [formValue, setFormValue] = useState('');
  const formValueRef = useRef('');

  useEffect(() => {
    if (formValue === '') {
      return;
    }

    if (formValue !== formValueRef.current) {
      setImages([]);
      setPageValue(1);
    }

    setLoader(true);

    ServiceAPI(formValue, pageValue).then(dataImages => {
      setImages(prevImages => [...prevImages, ...dataImages]);
      setLoader(false);
    });

    formValueRef.current = formValue;
  }, [formValue, pageValue]);

  const handleClickLoadMore = () => {
    setPageValue(prevPageValue => prevPageValue + 1);
  };

  const handleFormSubmit = searchData => {
    setFormValue(searchData);
  };
  return (
    <div className={css.App}>
      <Searchbar handleFormSubmit={handleFormSubmit} />
      <ImageGallery
        images={images}
        handleClickLoadMore={handleClickLoadMore}
        formValue={formValue}
      />
      {loader && <Loader />}
      {images.length > 0 && !loader && <Button onClick={handleClickLoadMore} />}
    </div>
  );
}

Searchbar.propTypes = { handleFormSubmit: PropTypes.func };
ImageGallery.propTypes = { formValue: PropTypes.string };
