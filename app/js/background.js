
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        switch (request.type) {
            case 'printTablePerson':
                {
                    chrome.tabs.create({ url: chrome.runtime.getURL('TablePerson.html') }); break;
                }
<<<<<<< HEAD
            case 'printMuteList':
=======
            case 'getListStudent':
>>>>>>> tien
                {
                    chrome.tabs.create({ url: chrome.runtime.getURL('MuteList.html') }); break;
                }
            case 'printTableListStudent':
                {
                    sendResponse(true);
                    chrome.tabs.create({ url: chrome.runtime.getURL('TablePerson.html') }); break;
                }
            case 'printAbsentStudents':
                    {
                        sendResponse(true);
                        chrome.tabs.create({ url: chrome.runtime.getURL('listStudent.html') }); break;
                    }
            case 'SaveAbsentStudents':
                {
                    let creating = chrome.tabs.create({ url: request.data.url });
                    sendResponse(true);
                    break;
                }
        }
        sendResponse(true);
    }
);
chrome.runtime.onInstalled.addListener(details => {
<<<<<<< HEAD
    chrome.tabs.create({ url: chrome.runtime.getURL('wheel.html') });
  });
=======
    // chrome.tabs.create({ url: chrome.runtime.getURL('listStudent.html') });
});
>>>>>>> tien
