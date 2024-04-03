const activateCommentsPopup = () => {
    const commentsEl = document.querySelector('#comments');
    const player = document.querySelector('.html5-video-player');

    commentsEl.classList.add("comments-popup")
    player.append(commentsEl);

}
   
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'activateCommentsPopup') {
        activateCommentsPopup();
    }
   });
