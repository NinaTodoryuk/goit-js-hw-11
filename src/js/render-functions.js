export function markupInterface(data) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = data.hits.map(hit => {
    return `<a href="${hit.largeImageURL}" class="gallery-item">
              <img src="${hit.webformatURL}" alt="${hit.tags}" />
            </a>`;
  }).join('');
}

export const listImg = document.querySelector('.gallery');
