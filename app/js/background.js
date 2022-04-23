chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        data = {};
        switch (request.type) {
            case 'printTablePerson':
                {
                    sendResponse(true);
                    chrome.tabs.create({ url: chrome.runtime.getURL('TablePerson.html') }); break;
                }
            case 'test':
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
        }
        return true;
    }
);

async function getContent() {
    let url = 'http://online.tdc.edu.vn/Portlets/Uis_Myspace/Professor/TeachDetail/ListStudentAbsents.aspx?WSID=1089450';
    const response = await fetch(url, {
        method: 'GET'
    })
    let result = await response.text();
    data = result;
    // return result;
}

chrome.runtime.onInstalled.addListener(details => {
});