var userAgent = localStorage.userAgent1;

var handler = function (e) {
    
    e.requestHeaders.forEach(function(x) {
        if (x.name === 'User-Agent') {
            x.value = userAgent;
        }
    });

	return { requestHeaders : e.requestHeaders };
};

chrome.webRequest.onBeforeSendHeaders.addListener(handler, {urls: ["<all_urls>"]},  ["blocking", "requestHeaders"]);

// アイコンを変更する
function changeIcon(str) {
	chrome.browserAction.setIcon({
		path: "icons/" + str
	});
}

// タブのIDを取得する
function getChromeWindowTabId() {
	chrome.tabs.query({
        active: !0,
        windowId: chrome.windows.WINDOW_ID_CURRENT
    }, function(e) {
        return e[0].id;
    });
}

// キャッシュを無効にしてタブを更新する
function reloadChromeWindowTab(tabId) {
	chrome.tabs.reload(tabId, {
		bypassCache: true
	});
}

// アイコンがクリックされた時
chrome.browserAction.onClicked.addListener(function () {
	if(!localStorage.userAgent1 || !localStorage.userAgent2) {
		window.open('options.html');
		return;
	}
	
	if(userAgent === localStorage.userAgent2) {
		userAgent = localStorage.userAgent1;
		changeIcon("icon_1_128.png");
	} else {
		userAgent = localStorage.userAgent2;
		changeIcon("icon_2_128.png");
	}
	
    reloadChromeWindowTab(getChromeWindowTabId());
});