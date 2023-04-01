import { useState } from 'react';

import Modal from './Modal/Modal';

import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
export default function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  const [dataModal, setDataModal] = useState('');

  const toggleModal = e => {
    if (dataModal === '') {
      return setDataModal(largeImageURL);
    }
    return setDataModal('');
  };

  return (
    <>
      {dataModal !== '' && (
        <Modal largeImageURL={dataModal} toggleModal={toggleModal} />
      )}
      <li className={css.ImageGalleryItem} onClick={toggleModal}>
        <img
          className={css.ImageGalleryItemImage}
          src={webformatURL}
          alt={id}
        />
      </li>
    </>
  );
}
