import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector(".gallery");

function createGallaryMarkUp(items) {
    return items
    .map(
      (item) => 
        `<div class = "gallery_item">
        <a class="gallery__link" href="${item.original}">
        <img 
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
        />
        </a>
        </div>`
    ).join("");
}


const addGallaryMarkup = createGallaryMarkUp(galleryItems);

divRef.innerHTML = addGallaryMarkup;

divRef.addEventListener("click", onImageClick);

function onImageClick(evt) {
//! Заборона стандартних дій, щоб браузер не відкривав картинку по посиланню
    blockStandartAction(evt);
//! Перевіряємо, якщо не картинка, виходимо
    if(evt.target.nodeName !== "IMG") {
        return;
    }


//! в протилежному випадку вик. бібліотеку basicLightbox
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" 
    width="800" height="600">
    `);
    instance.show();

//! Закриття
    divRef.addEventListener("keydown", (evt) => {
        if (evt.code === "Escape") {
            instance.close();
        }
    });
}

//* розбиття по функціям
function blockStandartAction(evt) {
    evt.preventDefault();
}





// let instance = "";
// function onClickImg(event) {
//     event.preventDefault();
//     if (event.target.nodeName !== "IMG") { return };
//     instance = basicLightbox.create(
//         `<img src=${event.target.dataset.source}`
//     );
//     instance.show();
//     document.addEventListener('keydown', onModalCloseToEscape);
// }
// function onModalCloseToEscape (evt) {
//     if (evt.code === "Escape") {
//         instance.close();
//         document.removeEventListener("keydown", onModalCloseToEscape);
//     }
// }

