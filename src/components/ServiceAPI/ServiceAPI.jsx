import axios from 'axios';

const API_KEY = '22160943-514fc90dc5a1a6996be2229bd';

export default function fetchImages(formValue, pageValue) {
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
