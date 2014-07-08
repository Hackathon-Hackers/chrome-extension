function onInstall() {
  console.log("Extension Installed");
  chrome.windows.create({url:"options/options.html", type:"popup", width:356, height:584});
}

function onUpdate() {
  console.log("Extension Updated");
}

var currVersion = chrome.app.getDetails().version;
var prevVersion = localStorage['version'];

if (currVersion != prevVersion) {
  if (typeof prevVersion == 'undefined') {
    onInstall();
  } else {
    onUpdate();
  }
  localStorage['version'] = currVersion;
}

// Page action to open options
function checkForValidUrl(tabId, changeInfo, tab) {
  if(changeInfo.status === "loading") {
    if (tab.url.indexOf('www.facebook.com') > -1) {
      chrome.pageAction.show(tabId);
    }
  }
}

chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.windows.create({url:"options/options.html", type:"popup", width:356, height:584});
});
