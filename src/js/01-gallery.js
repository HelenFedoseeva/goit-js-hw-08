// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// Change code below this line

console.log(galleryItems);


const listGalleryRef = document.querySelector('.gallery')

listGalleryRef.addEventListener('click', simpleGalleryHandler)
listGalleryRef.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems))


function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`
    }).join('');
}


 let gallery = new SimpleLightbox('.gallery a', {
        captions: true,
        captionPosition: 'bottom',
        captionDelay: 250,
        captionsData: 'alt',
 });
   
function simpleGalleryHandler(event) { 
    event.preventDefault();

    if (event.target.nodeName !== "IMG") { 
      return
    }   
}