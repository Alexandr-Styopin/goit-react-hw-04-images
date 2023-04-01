import css from '../Modal/Modal.module.css';
import { useEffect } from 'react';

export default function Modal({ largeImageURL, toggleModal }) {
  useEffect(() => {
    const handleKeyDowd = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDowd);

    return () => {
      window.removeEventListener('keydown', handleKeyDowd);
    };
  });
  return (
    <div className={css.Overlay} onClick={toggleModal}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
}
