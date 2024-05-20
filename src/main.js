import simpleLightbox from 'simplelightbox';
import { searchPhotos } from './js/pixabay-api.js';
import { markupInterface } from './js/render-functions.js';
import iziToast from 'izitoast';

const searchButton = document.querySelector('.searchButton');
const clearInput = () => {
  const input = document.querySelector('.input');
  input.value = '';
};

function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}

function showLoader(){
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
}

searchButton.addEventListener('click', async event => {
  event.preventDefault();

  const input = document.querySelector('.input');

  if (input.value.trim() === '') {
    iziToast.error({
      title: 'Error',
      message:
        'The search field cannot be empty! Please enter the search query!',
    });
    return;
  } 
  
  showLoader();
  
  try {
    const response = await searchPhotos(input.value);
            if (!response.ok) {
          throw new Error(response.status);
        }
      const data = await response.json();
      hideLoader();

      // Очищення галереї перед новим пошуком
      listImg.innerHTML = '';
      
      if (data.hits.length === 0) {
          iziToast.error({
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        }

        markupInterface(data);

        // Ініціалізація SimpleLightbox після додавання зображень
        new simpleLightbox('.gallery a', {
          caption: true,
          captionData: 'alt',
          captionDelay: 250,
        });

      } catch (error) {
        hideLoader();
        console.error('Error:', error);
      } finally{
        clearInput();
      }
});