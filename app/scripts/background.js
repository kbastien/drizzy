'use strict';

$(document).snowfall({image :"http://www.lilwaynehq.com/forums/images/smilies/drizzy-face.png", minSize: 15, maxSize:40, flakeCount : 100, maxSpeed : 10});
chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: '\'Allo'});

console.log('\'Allo \'Allo! Event Page for Browser Action');
