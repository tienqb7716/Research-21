let btnMute = document.querySelector('.btn-get-mute-list');
let btnGrouping = document.querySelector('.btn-grouping');
let txtGrouping = document.querySelector('.txt-grouping');
let btnImportGroup = document.querySelector('.btn-import-group');
let btnSaveGroupingList = document.querySelector('.btn-save-grouping-list');
let txtChat;
let btnChat;

async function sendMessageBGJS(type) {
    let result = await chrome.runtime.sendMessage({
        type: type
    });
}

// Grouping
btnGrouping.addEventListener('click', function () {
    txtGrouping.classList.toggle('d-none');
    btnImportGroup.classList.toggle('d-none');

});

// Import Group
btnImportGroup.addEventListener('click', function () {
    txtChat = document.querySelector('#bfTqV')
    btnChat = document.querySelector('.VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.tWDL4c.Cs0vCd')
    txtChat.value = txtGrouping.value;
    btnChat.disabled = false;
    btnChat.click();

});

// Save grouping list
btnSaveGroupingList.addEventListener('click', function(){
    const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
        createHTML: (string) => string
      });
      
      el = document.querySelector('.koV58.Zi94Db').parentNode;
      const escaped = escapeHTMLPolicy.createHTML(`<span class="badge bg-secondary text-white">New</span>`);
      console.log(el.insertAdjacentHTML("afterbegin", escaped));
});

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
});



