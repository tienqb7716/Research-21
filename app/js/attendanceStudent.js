if (window.location.hostname === 'online.tdc.edu.vn') {
    chrome.storage.sync.get([window.location.href], function (result) {
        url = window.location.href;
        if (result[url]!=undefined) {
            const list = JSON.parse(result[url]);
            const arrRow = document.querySelectorAll('.style31');
            let i = 0;
            let inputs = document.querySelectorAll('[type="text"]');
            inputs.forEach(input => {
                input.value = ' ';
            });
            arrRow.forEach(element => {
                const id = element.children[1].children[0].textContent;
                let student = list.find(function (item) {
                    return item.id === id;
                })
                if (student) {
                    let input = element.children[element.childElementCount - 1].children[0];
                    if (student.coPhep) {
                        input = element.children[element.childElementCount - 2].children[0]
                    }
                    input.value = student.soTiet;
                }
            });
            const submit = document.querySelector('#btnSave');
            submit.click();
            chrome.storage.sync.remove([window.location.href]);
        }
    });
}