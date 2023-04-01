// import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';

export default function ImageGallery({ openModal, images }) {
  // const [images, setImages] = useState([]);
  // const [pageValue, setPageValue] = useState(1);
  // const [loader, setLoader] = useState(false);
  // const [dataModal, setDataModal] = useState('');
  // const formValueRef = useRef('');

  // useEffect(() => {
  //   if (formValue === '') {
  //     return;
  //   }

  //   if (formValue !== formValueRef.current) {
  //     setImages([]);
  //     setPageValue(1);
  //   }

  //   setLoader(true);

  //   ServiceAPI(formValue, pageValue).then(dataImages => {
  //     setImages(prevImages => [...prevImages, ...dataImages]);
  //     setLoader(false);
  //   });

  //   formValueRef.current = formValue;
  // }, [formValue, pageValue]);

  // const handleClickLoadMore = () => {
  //   setPageValue(prevPageValue => prevPageValue + 1);
  // };

  // const CloseModal = e => {
  //   setDataModal('');
  // };

  // const openModal = largeImageURL => {
  //   setDataModal(largeImageURL);
  // };

  // useEffect(() => {
  //   const handleKeyDowd = e => {
  //     if (e.code === 'Escape') {
  //       setDataModal('');
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyDowd);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDowd);
  //   };
  // }, []);

  return (
    <div className={css.ImageGalleryWrapper}>
      <ul className={css.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            openModal={openModal}
          />
        ))}
      </ul>
    </div>
  );
}
// Modal.propTypes = {
//   largeImageURL: PropTypes.string,
//   onClick: PropTypes.func,
// };
