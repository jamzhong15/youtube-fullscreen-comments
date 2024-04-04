const activateExtension = () => {
    const commentsSection = document.querySelector('#comments');
    const videoPlayer = document.querySelector('.html5-video-player');
    const videoContent = document.querySelector('.video-stream');
    const originalCommentsContainer = document.querySelector('#below');

    const commentsWrapper = document.createElement('div');
    commentsWrapper.classList.add("comments-wrapper");
    
    const toggleComments = (event) => {
        const commentsToggleButton = document.querySelector('#comments-toggle-button');
        const commentsToggled = commentsToggleButton.getAttribute('aria-pressed')
    
        if (commentsToggled == 'false') {
            commentsSection.classList.add("comments-content");
            commentsToggleButton.setAttribute('aria-pressed', 'true');
            
            commentsWrapper.style.display = 'block';
            commentsWrapper.append(commentsSection);
            commentsWrapper.style.height = `${videoContent.clientHeight}px`;
            videoPlayer.append(commentsWrapper);
        } else {
            commentsSection.classList.remove("comments-content");
            commentsToggleButton.setAttribute('aria-pressed', 'false');
            originalCommentsContainer.append(commentsSection);
            commentsWrapper.style.display = 'none';
        }
    
    }
    
    const createCommentsButton = () => {
        const rightControls = document.querySelector('.ytp-right-controls');
        const commentsToggleButton = document.createElement('button');
        
        commentsToggleButton.classList.add('ytp-button');
        commentsToggleButton.classList.add('comments-button');
        commentsToggleButton.setAttribute('aria-pressed', 'false');
        commentsToggleButton.setAttribute('id','comments-toggle-button');
      
        commentsToggleButton.innerHTML = `
        <svg fill="#ffffff" viewBox="-12.8 -12.8 57.60 57.60" id="Outlined" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Fill"> <path d="M26,3H6A3,3,0,0,0,3,6V30.41l5.12-5.12A1.05,1.05,0,0,1,8.83,25H26a3,3,0,0,0,3-3V6A3,3,0,0,0,26,3Zm1,19a1,1,0,0,1-1,1H8.83a3,3,0,0,0-2.12.88L5,25.59V6A1,1,0,0,1,6,5H26a1,1,0,0,1,1,1Z"></path> <rect height="2" width="12" x="10" y="11"></rect> <rect height="2" width="7" x="10" y="15"></rect> </g> </g></svg>
        `
        
        rightControls.prepend(commentsToggleButton);
        commentsToggleButton.addEventListener('click', toggleComments);
    
    }
    
    createCommentsButton()
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'activateExtension') {
        activateExtension();
    }
   });
