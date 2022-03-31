import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');

const galleryItemsMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);

function createGallery(galleryItems) {
    return galleryItems.map(galleryItem => {
        return `
        <li>
            <a class="gallery__item" href="${galleryItem.original}">
                <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
            </a>
        </li> 
    `;
    }).join("");
}

let gallery = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: "alt"});
gallery.on('show.simplelightbox');