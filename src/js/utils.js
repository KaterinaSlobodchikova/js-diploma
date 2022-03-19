import { getPhotos } from './api.js';

export const initializeHomePage = () => {
    const photos = getPhotos();
    console.log(photos);
}



