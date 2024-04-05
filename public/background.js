const handleUpdate = (tabId, changeInfo, tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];
  if (tab && tab.id !== undefined && tab.url.includes('youtube.com/watch') && changeInfo.url) {
    chrome.tabs.sendMessage(tabs[0].id, htmlStates, (response) => {
      if(chrome.runtime.lastError){
          console.log(chrome.runtime.lastError, 'Did not send');
      }else console.log(response);
  })
    console.log("here2")
  }
    });
};

chrome.tabs.onUpdated.addListener(handleUpdate);

// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//   const tab = tabs[0];
//   if (tab && tab.id !== undefined) {
//     chrome.tabs.sendMessage(tab.id, {
//       action: 'activateExtension',
//     });
//   }
// });