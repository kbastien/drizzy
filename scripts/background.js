var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.browserAction.setIcon({path: "icon.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {file:"scripts/drizzy.js"});
  }
  else{
    chrome.browserAction.setIcon({path: "icon.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {code:"alert('YOLO')"});
  }
});