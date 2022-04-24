chrome.storage.sync.get(['TDCOLINE'], function (result) {
    if (result.TDCOLINE) {

        const bodyTable = document.querySelector('tbody');
        const soTiet = result.TDCOLINE.soTiet;
        const url = result.TDCOLINE.url;
        const arr = result.TDCOLINE.list;
        const caption = document.querySelector('caption');
        caption.innerHTML = `Tổng số sinh viên ${arr.length}`;
        
        let i = 1;
        arr.forEach(element => {
            bodyTable.innerHTML += `
            <tr>
            <td>${i}</td>
            <td class="id-student">${element.id}</td>
            <td>${element.class}</td>
            <td>${element.firstname}</td>
            <td>${element.lastname}</td>
            <td>
                <input type="number" class="form-control so-tiet" value=${soTiet} min="0" max="9">
            </td>
            <td class="text-center">
                    <input class="form-check-input mx-auto co-phep" type="checkbox">
            </td>
            </tr>
            `
            i++;
        });
        const btnSave = document.querySelector('.btn-save');
        btnSave.addEventListener('click', () => {
            const tableData = document.querySelector('tbody');
            const list = [];
            for (const row of tableData.children) {
                const id = row.querySelector('.id-student').textContent;
                const soTiet = row.querySelector('.so-tiet').value;
                const coPhep = row.querySelector('.co-phep').checked;
                list.push({ id, soTiet, coPhep });
            }
            sendMessageBGJS("SaveAbsentStudents",{
                url:url
            })
            // lưu danh sách người
            chrome.storage.sync.set({ [url] : JSON.stringify(list) });
            allow = false;
        })
        const checkboxes = document.querySelectorAll('input[type=checkbox]');
        const btnAllCheck =  document.querySelector('.all-checked')
        btnAllCheck.addEventListener('click', function (){
            for (var checkbox of checkboxes) {
                checkbox.checked = true;
            }
        })
        const btnNOAllCheck = document.querySelector('.all-no-checked');
        btnNOAllCheck.addEventListener('click', function (){
            for (var checkbox of checkboxes) {
                checkbox.checked = false;
            }
        })
        
        async function sendMessageBGJS(type, data) {
            let result = await chrome.runtime.sendMessage({
                type: type,
                data: data
            }, function (response) {
            });
        }
        let allow = true;
        window.addEventListener('beforeunload', event => {
            if (allow) {
                return event.returnValue = "Are you sure you want to exit?";
            }
            allow = false;
        });
        
    }
});
