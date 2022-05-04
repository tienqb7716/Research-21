chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        data = {};
        switch (request.type) {
            case 'printTablePerson':
                {
                    const page  = chrome.runtime.getURL('TablePerson.html')+"?idGoogleMeet="+request.data.idGoogleMeet+'-tablePerson';
                    let creating = chrome.tabs.create({ url: page });
                    sendResponse(true);
                    break;
                }
            case 'getListStudent':
                {
                    const url = request.data.url;
                    fetch(url, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                        }
                    })
                        .then(response => response.text())
                        .then(response => sendResponse(response))
                        .catch(error => console.log('Error:', error));
                    break;
                }
            case 'printTableListStudent':
                {
                    chrome.tabs.create({ url: chrome.runtime.getURL('TablePerson.html') }); sendResponse(true); break;
                }
            case 'printAbsentStudents':
                    {
                        chrome.tabs.create({ url: chrome.runtime.getURL('listStudent.html') }); sendResponse(true); break;
                    }
            case 'SaveAbsentStudents':
                {
                    let creating = chrome.tabs.create({ url: request.data.url });
                    break;
                }
             case 'pageWheel':
                {
                    const page  = chrome.runtime.getURL('wheel.html')+"?idGoogleMeet="+request.data.idGoogleMeet;
                    let createData = {
                        url: page,
                        width: 1000,
                        height: 1200
                    }
                    chrome.windows.create(createData, (window) => {
                        console.log(window)
                    });
                     sendResponse(true);
                    break;
            }
        }
        return true;
    }
);

chrome.runtime.onInstalled.addListener(details => {
    // chrome.tabs.create({ url: chrome.runtime.getURL('wheel.html?idMeet=123') });s
});
