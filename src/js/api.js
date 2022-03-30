import { PHOTOS_LIST_KEY } from './constants.js';

export const getPins = () => {
    if (JSON.parse(localStorage.getItem(PHOTOS_LIST_KEY))) {
        return JSON.parse(localStorage.getItem(PHOTOS_LIST_KEY));
    }

    return PIN_PHOTOS;
}

export function getPhotos() {
    return fetch('https://62430ddcd126926d0c5b2299.mockapi.io/pin/pins')
    .then(function(res) {
        return res.json();
    })
    .then((res) => {
        var result = document.getElementById('main-wrapper');
        console.log(res);
        res.forEach(element => {
            const pin = document.createElement('img');
            pin.className = 'pin-photo';
            pin.src = element.url;
            result.append(pin);
        });
    });
}