//http '43940404-366b9d94bf735917b74c3de1b' API

const API_KEY = '43940404-366b9d94bf735917b74c3de1b';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = searchImage => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchImage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 21,
  });

  return fetch(`${BASE_URL}/?${params}`).then(response =>{
    if (!response.ok){
      throw new Error(
        'Sorry, there are no image matching your search query. Please try again!'
      );
    }
    return response.json();
  });
}

