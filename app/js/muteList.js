let btnMute;

async function sendMessageBGJS(type) {
    let result = await chrome.runtime.sendMessage({
        type: type
    });
}

btnMute = document.querySelector('.btn-get-mute-list');

btnMute.addEventListener('click', function () {

    // lưu danh sách người
    // chrome.storage.sync.set({ tablePerson: JSON.stringify(dataAttendance) });

    // gửi yêu cầu
    sendMessageBGJS('printMuteList');

    const listNodeUser = document.querySelectorAll('.cxdMu');

    const listUser = [...listNodeUser].map(el => {
        if (el.querySelector('.JHK7jb.Nep7Ue.FTMc0c.I118Fc')) {
           
        }
    }

    )

    console.log(listUser);

    // observerChatlist.disconnect();
    // this.classList.add('d-none');



    // thông báo
    textMessage.value = `Kết thúc điểm danh theo từ khoá "${keyAttendance}" vào lúc ${(new Date()).toLocaleString()} `;
    btnSendMessage.disabled = false;
    btnSendMessage.click();
    dataAttendance = [];
})

