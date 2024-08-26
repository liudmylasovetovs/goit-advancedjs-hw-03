const API_KEY = '45630134-be2c900d0fa84b494dc62f217';
const BASE_URL = 'https://pixabay.com/api';

export const fetchImages = async query => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}/?${params.toString()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Response not OK');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};