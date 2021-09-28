let albumsList = document.querySelector('.albums_list');
let galleryPhoto = document.querySelector('.galleryPhoto');
getAlbums().then(() => getPhotos(1));


async function getAlbums() {
    let albums = await fetch('https://jsonplaceholder.typicode.com/albums');
    let albumsArr = await albums.json();
    albumsList.innerHTML = albumsArr.map(data => {
        return `<li  class="albums_list-item" data-id="${data.id}">${data.id}. Album title: "${data.title}"</li>`;
    }).join('');
};

async function getPhotos(id) {
    let photos = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
    let photosArr = await photos.json();
    galleryPhoto.innerHTML = photosArr.map(data => {
        return `<img class="photos_img" src="${data.thumbnailUrl}"></img>`;
    }).join('');
};

albumsList.addEventListener('click', (event) => getPhotos((event.target.getAttribute('data-id'))));