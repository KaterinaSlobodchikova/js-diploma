import { getPhotos, PIN_PHOTOS } from './api.js';

export const initializeHomePage = () => {
    const photos = getPhotos();
}

export const appendPin = (pin) => {
    const dataContainer = document.getElementById('data-container');
    const pinNode = getPinAsHtml(pin);
    dataContainer.prepend(pinNode);    
}

export const getPinAsHtml = (pin) => {
    const pinWrapper = document.createElement('div');
    const pinBody = document.createElement('div');
    const pinImg = document.createElement('img');
    let f = file.files[0];
    if (f) {
        pinImg.src = URL.createObjectURL(f);
    }
    
    const deletePin = document.createElement('button');
    const editPin = document.createElement('button');

    pinWrapper.className = 'pin-wrapper';
    pinImg.className = 'pin-image';
    deletePin.className = 'delete-btn';
    editPin.className = 'edit-btn';
    pinBody.className = 'pin-title';

    pinBody.id = `pin-title_${pin.id}`;
    pinWrapper.id = `pin_${pin.id}`;
    deletePin.id = `delete-pin_${pin.id}`;
    editPin.id = `edit-pin_${pin.id}`;

    pinWrapper.append(pinImg);
    pinBody.append(document.createTextNode(pin.title));
    pinWrapper.append(pinBody);
    editPin.append(document.createTextNode('Edit'));
    pinWrapper.append(editPin);
    deletePin.append(document.createTextNode('Delete'));
    pinWrapper.append(deletePin);

    return pinWrapper;
}

export const addNewPin = (pinData) => {
    const pinID = +new Date();
    //const storedPins = JSON.parse(localStorage.getItem('PIN_PHOTOS'));
    const pinToAdd = {
        id: pinID, 
        title: pinData.title,
        url: pinData.url,
    }

    const pinToSave = [pinToAdd];

    appendPin(pinToAdd);
    //localStorage.setItem(PHOTOS_LIST_KEY, JSON.stringify(pinToSave));
}

initializeHomePage();

function onFileSelect(e) {
    const f = e.target.files[0];
    const reader = new FileReader;
    const place = document.getElementById('preview-img');
    reader.readAsDataURL(f);
    reader.onload = function(e) {
        place.src = e.target.result;
    }
}
if(window.File && window.FileReader && window.FileList && window.Blob) {
    document.querySelector("input[type=file]").addEventListener('change', onFileSelect, false);
} else {
    console.warn("Your browser does not support FileAPI")
}

export const getPinById = (id) => {
    const storedUsers = JSON.parse(localStorage.getItem(PHOTOS_LIST_KEY));

    return storedUsers.find(pin => pin.id === id);
}

export const savePin = (id, pinData) => {
    const storedPins = JSON.parse(localStorage.getItem(PHOTOS_LIST_KEY));
    const pinsToSave = storedPins.map(pin => {
        if (pin.id === id) {
            pin.title = pinData.title;
            pin.file = pinData.file;
        }

        return pin;
    });

    const pinTitleHtml = document.getElementById(`pin-title_${id}`);
    pinTitleHtml.innerHTML = pinData.title;

    localStorage.setItem(PHOTOS_LIST_KEY, JSON.stringify(pinsToSave));
}




