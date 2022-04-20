
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        switch (request.type) {
            case 'printTablePerson':
                {
                    chrome.tabs.create({ url: chrome.runtime.getURL('TablePerson.html') }); break;
                }
            case 'printMuteList':
                {
                    chrome.tabs.create({ url: chrome.runtime.getURL('MuteList.html') }); break;
                }
        }
        sendResponse(true);
    }
);
