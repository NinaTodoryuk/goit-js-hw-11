//http '43940404-366b9d94bf735917b74c3de1b' API

const API_KEY = '43940404-366b9d94bf735917b74c3de1b';
const BASE_URL = 'https://pixabay.com/api/';

export async function searchPhotos(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`;
  return await fetch(url);
}