

let isUpdatesOpen = false;
let isCommentsOpen = false;
let isAccountOpen = false;

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
    const isTargetMainWindow = e.target.id.split('-')[0] === 'main';

    if (!updatesWindow.contains(e.target) && isUpdatesOpen && isTargetMainWindow) {
        hideUpdatesWindow();
    }

    if (!commentsWindow.contains(e.target) && isCommentsOpen && isTargetMainWindow) {
        hideCommentsWindow();
    }

    if (!accountWindow.contains(e.target) && isAccountOpen && isTargetMainWindow) {
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
