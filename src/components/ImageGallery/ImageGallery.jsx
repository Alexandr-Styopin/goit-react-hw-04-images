import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import css from '../ImageGallery/ImageGallery.module.css';

const API_KEY = '22160943-514fc90dc5a1a6996be2229bd';

function fetchImages(formValue, pageValue) {
  try {
    const response = axios
      .get(
        `https://pixabay.com/api/?q=${formValue}&page=${pageValue}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => response.data.hits);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default function ImageGallery({ formValue }) {
  const [images, setImages] = useState([]);
  const [pageValue, setPageValue] = useState(1);
  const [loader, setLoader] = useState(false);
  const [dataModal, setDataModal] = useState('');
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

    fetchImages(formValue, pageValue).then(dataImages => {
      setImages(prevImages => [...prevImages, ...dataImages]);
      setLoader(false);
    });

    formValueRef.current = formValue;
  }, [formValue, pageValue]);

  const handleClickLoadMore = () => {
    setPageValue(prevPageValue => prevPageValue + 1);
  };

  const CloseModal = e => {
    setDataModal('');
  };

  const openModal = largeImageURL => {
    setDataModal(largeImageURL);
  };

  useEffect(() => {
    const handleKeyDowd = e => {
      if (e.code === 'Escape') {
        setDataModal('');
      }
    };

    window.addEventListener('keydown', handleKeyDowd);

    return () => {
      window.removeEventListener('keydown', handleKeyDowd);
    };
  }, []);

  return (
    <div className={css.ImageGalleryWrapper}>
      {dataModal !== '' && (
        <Modal largeImageURL={dataModal} onClick={CloseModal} />
      )}

      <ul className={css.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onClick={openModal}
          />
        ))}
      </ul>
      {loader && <Loader />}
      {images.length > 0 && <Button onClick={handleClickLoadMore} />}
    </div>
  );
}
Modal.propTypes = {
  largeImageURL: PropTypes.string,
  onClick: PropTypes.func,
};
