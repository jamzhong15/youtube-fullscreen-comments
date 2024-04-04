const activateCommentsPopup = () => {
    const commentsSection = document.querySelector('#comments');
    const videoPlayer = document.querySelector('.html5-video-player');
    const videoContent = document.querySelector('.video-stream');
    const rightControls = document.querySelector('.ytp-right-controls');

    const commentsWrapper = document.createElement('div');
    commentsSection.classList.add("comments-content");
    commentsWrapper.classList.add("comments-wrapper");
    
    commentsWrapper.appendChild(commentsSection);
    commentsWrapper.style.height = `${videoContent.clientHeight}px`;
    videoPlayer.append(commentsWrapper);




    var button = document.createElement('button');
    
    button.classList.add('ytp-button');
    button.classList.add('ytp-repeat-button');
    button.setAttribute('title', 'Repeat'); // TODO read from file
    button.setAttribute('area-label', 'Repeat');
  
    button.innerHTML = `
      <div class='tip'><span>Repeat</span></div>
      <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
        <use class="ytp-svg-shadow" xlink:href="#ytp-id-144121"></use>
        <path class="ytp-svg-fill"
        d="M13,13 h10 v3 l4,-4 l-4,-4 v3 H11 v6 h2 V13 zm10,10 H13 v-3 l-4,4 l4,4 v-3 h12 v-6 h-2 v4 zm-4,-2 V15 h-1 l-2,1 v1 h1.5 v4 H19 z"
        id="ytp-id-144121"></path>
      </svg>
    `;
    
    rightControls.prepend(button);
}
   
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'activateCommentsPopup') {
        activateCommentsPopup();
    }
   });
