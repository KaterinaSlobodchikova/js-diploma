import { getPhotos, PIN_PHOTOS } from './api.js';

export const initializeHomePage = () => {
    const photos = getPhotos();
    console.log(photos);
}

export const appendPin = (pin) => {
    const dataContainer = document.getElementById('data-container');
    const pinNode = getPinAsHtml(pin);
    dataContainer.append(pinNode);    
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

export const savePin = (id, pinData) => {
    const storedPins = JSON.parse(localStorage.getItem(PIN_PHOTOS));
    const pinToSave = storedPins.map(pin =>{
        if (pin.id === id){
            pin.title = pinData.title;
            pin.file = pinData.file;
        }

        return pin;
    })

    const pinTitleHtml = document.getElementById(`pintitle_${id}`);
    pinTitleHtml.innerHTML = pinData.title;
    
    localStorage.setItem(PHOTOS_LIST_KEY, JSON.stringify(pinToSave));

}


