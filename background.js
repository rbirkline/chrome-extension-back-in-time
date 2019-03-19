'use strict';

let popupLoadedTime = 0;
chrome.tabs.onCreated.addListener(function(tab){

  let d = new Date;
  if (popupLoadedTime == 0 || d.getTime()-popupLoadedTime > 30000){

    popupLoadedTime = d.getTime();
    chrome.tabs.create({url : "files/popup.html#inline"});
  }
});
