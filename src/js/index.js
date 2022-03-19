import { getPhotos } from './utils.js';
import { PHOTO_KEY, PHOTOS_LIST_KEY } from './constants.js';

let isUpdatesOpen = false;
let isCommentsOpen = false;
let isAccountOpen = false;
let isPinAdd = false;

const updatesWindow = document.getElementById('modal-updates');
const commentsWindow = document.getElementById('modal-comments');
const accountWindow = document.getElementById('modal-account');

const showUpdates = document.getElementById('updates-button');
showUpdates.addEventListener('click', () => {
    isUpdatesOpen = true;
    const windowUpdates = document.getElementById('modal-updates');
    windowUpdates.className = 'modal-window';
});

const showComments = document.getElementById('comments-button');
showComments.addEventListener('click', () => {
    isCommentsOpen = true;
    const windowComments = document.getElementById('modal-comments');
    windowComments.className = 'modal-window';
});

const showAccountInfo = document.getElementById('check-box-button');
showAccountInfo.addEventListener('click', () => {
    isAccountOpen = true;
    const windowAccount = document.getElementById('modal-account');
    windowAccount.className = 'modal-window';
});

const main = document.getElementById('main-wrapper');
main.addEventListener('click', (e) => {
    const isTargetUpdatesWindow = e.target.id.split('-')[1] === 'updates';
    const isTargetCommentsWindow = e.target.id.split('-')[1] === 'comments';
    const isTargetAccountWindow = e.target.id.split('-')[1] === 'account';

    if (!updatesWindow.contains(e.target) && isUpdatesOpen && !isTargetUpdatesWindow) {
        hideUpdatesWindow();
    }

    if (!commentsWindow.contains(e.target) && isCommentsOpen && !isTargetCommentsWindow) {
        hideCommentsWindow();
    }

    if (!accountWindow.contains(e.target) && isAccountOpen && !isTargetAccountWindow) {
        hideAccountWindow();
    }
})

const hideUpdatesWindow = () => {
    isUpdatesOpen = false;
    const modalWindow = document.getElementById('modal-updates');
    modalWindow.className += ' hidden';
}

const hideCommentsWindow = () => {
    isCommentsOpen = false;
    const modalWindow = document.getElementById('modal-comments');
    modalWindow.className += ' hidden';
}

const hideAccountWindow = () => {
    isAccountOpen = false;
    const modalWindow = document.getElementById('modal-account');
    modalWindow.className += ' hidden';
}

const addPin = document.getElementById('pin-add-button');
addPin.addEventListener('click', () => {
    isPinAdd = true;
    const windowAddPin = document.getElementById('modal-add-pin');
    windowAddPin.style.display = 'block';
    const wrapper = document.getElementById('main-wrapper');
    wrapper.className += ' lightgray';
    windowAddPin.className = 'add-pin-window';
});

const hideWindow = () => {
    const windowAddPin = document.getElementById('modal-add-pin');
    windowAddPin.style.display = 'none'; 
    const wrapper = document.getElementById('main-wrapper');
    wrapper.className += 'main-container';
}

const cancelCreatePin = document.getElementById('cancel-button');
cancelCreatePin.addEventListener('click', hideWindow);