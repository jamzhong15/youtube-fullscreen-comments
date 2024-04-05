chrome.tabs.onUpdated.addListener(function (_, changeInfo, tab) {
  if (tab && tab.url.includes('youtube.com/watch') && changeInfo.status === 'complete'){
    chrome.tabs.sendMessage(tab.id, {
            action: 'activateExtension',
          });
  }
});


