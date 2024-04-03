const activateCommentsPopup = () => {
    const commentsEl = document.querySelector('#comments');
    const commentsContent = document.querySelector('#sections');

    const videoPlayer = document.querySelector('.html5-video-player');
    const videoContent = document.querySelector('.video-stream');
    

    commentsEl.classList.add("comments-popup");
    // videoContent.classList.add("video-with-comments");
    commentsContent.classList.add("comments-content");

    videoPlayer.append(commentsEl);


}
   
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'activateCommentsPopup') {
        activateCommentsPopup();
    }
   });
