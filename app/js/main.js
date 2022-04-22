if (window.location.hostname === 'meet.google.com') {

  let html = `
<div class="wrapper-rs">
  <header style="text-align: center;">
    <i class="bi bi-tools"></i>
  </header>
  <div class="content __hide pt-3">
    <ul>
      <li class='fw-bold' id="__diem-danh" data-bs-toggle="collapse" data-bs-target="#__diem-danh-collapse">
        <i class="bi bi-check-all"></i> Điểm danh
      </li>
      <div class="collapse " id="__diem-danh-collapse">
        <div class="dropdown dropend">
              <p class="dropdown-item ps-4 dropdown-toggle px-2 m-0" href="#" role="button" id="dropdownMenuLink"
                data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                Điểm danh theo keyword
              </p>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <div class="input-group mb-3 px-2">
              <input type="text" class="form-control input-attendance-keyword" placeholder="Nhập keyword"
                aria-label="Recipient's username" aria-describedby="button-addon2">
              <button class="btn btn-outline-primary btn-sm btn-attendance-keyword" type="button">Điểm danh</button>
            </div>
            <div class="input-group mb-3 px-2">
              <input class="form-check-input" type="checkbox" value="" id="ignoreUppercaseAndLowercase">
              <label class="form-check-label ps-2" for="ignoreUppercaseAndLowercase">
                Bỏ qua chữ hoa và chữ thường
              </label>
            </div>
            <div class="input-group mb-3 p-2">
              <button type="button" class="btn btn-danger btn-sm btn-stop-attendance-keyword d-none">Kết thúc điểm
                danh</button>
            </div>
          </div>
        </div>
        <div class="dropdown dropend">
        <p class="dropdown-item ps-4 dropdown-toggle px-2 m-0" href="#" role="button" id="dropdownMenuLink"
          data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
          Điểm danh trang online.tdc.edu.vn
        </p>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <h6 class="dropdown-header">Điểm danh trang online.tdc.edu.vn</h6>
      <div class="input-group mb-3 px-2">
        <input type="text" class="form-control input-attendance-keyword" placeholder="Nhập link danh sách"
          aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-primary btn-sm btn-attendance-keyword" type="button">Điểm danh</button>
      </div>
      <div class="input-group mb-3 p-2">
        <button type="button" class="btn btn-danger btn-sm btn-stop-attendance-keyword d-none">Kết thúc điểm
          danh</button>
      </div>
    </div>
  </div>
      </div>
      <li class='fw-bold'  data-bs-toggle="modal" data-bs-target="#modelId">
        <i class="bi bi-clipboard-data"></i> Khảo sát
      </li>
      <li class='fw-bold'  >
        <i class="bi bi-people"></i> Chia nhóm
      </li>
      <li class='fw-bold'  >
        <i class="bi bi-disc"></i> Ngẫu nhiên người tham gia
      </li class='fw-bold'  >
      <li class='fw-bold'  >
        <i class="bi bi-door-open"></i> Tự động xác nhận <span class="form-check float-end form-switch">
          <input class="form-check-input __toggle-auto-admit" type="checkbox" role="switch" id="toggleAutoAdmit">
        </span>
      </li>
      <li class='fw-bold'  >
        <div class="btn-get-mute-list"><i class="bi bi-mic-mute"></i> Lấy danh sách người không bật mic</div>
      </li>
    </ul>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          Add rows here
        </div>
      </div>
    </div>
  </div>
</div>
`
  // nhung link bootstrap
  document.head.insertAdjacentHTML('afterbegin', `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">`);
  document.body.insertAdjacentHTML('afterbegin', html);
  const wrapper = document.querySelector(".wrapper-rs"),
    header = wrapper.querySelector(".wrapper-rs>header");
  const card = document.querySelector('.wrapper-rs .content');
  header.addEventListener('click', function () {
    card.classList.toggle('__hide');
  })
  function onDrag({ movementX, movementY }) {
    let getStyle = window.getComputedStyle(wrapper);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);
    wrapper.style.left = `${leftVal + movementX}px`;
    wrapper.style.top = `${topVal + movementY}px`;
  }

  header.addEventListener("mousedown", () => {
    header.classList.add("active");
    header.addEventListener("mousemove", onDrag);
  });

  document.addEventListener("mouseup", () => {
    header.classList.remove("active");
    header.removeEventListener("mousemove", onDrag);
  });

  let activeFrameMessage = false;
  let textMessage = document.querySelector('#bfTqV');
  let btnSendMessage = document.querySelector('.VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.tWDL4c.Cs0vCd');
  let listChat = document.querySelector('.z38b6');

  // kiểm tra thay đổi và lấy các đối tượng
  const observer = new MutationObserver(mutations => {
    if (!activeFrameMessage) {
      let showListChat = document.querySelector('[data-tooltip-id=tt-c14]');
      if (showListChat != null) {
        showListChat.click();
        activeFrameMessage = true;
      }
    }
    if (textMessage == null) {
      textMessage = document.querySelector('#bfTqV');
      btnSendMessage = document.querySelector('.VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.tWDL4c.Cs0vCd');
      listChat = document.querySelector('.z38b6');
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  function admitUserIfWaiting() {
    const spanElements = document.getElementsByTagName('span');
    for (let i = 0; i < spanElements.length; i++) {
      const span = spanElements[i];
      // show list 
      if (span.textContent == 'View all' || span.textContent == 'Xem tất cả') {
        console.log('ada beberapa peserta masuk');
        span.click();
      }

      // chấp nhận từng người
      if (span.textContent == 'Admit' || span.textContent == 'Chấp nhận') {
        console.log(`Admitting participant automatically.`);
        span.click();
      }

    }
  }

  const toggleAutoAdmit = document.querySelector('.__toggle-auto-admit');

  toggleAutoAdmit.addEventListener('click', function () {
    if (this.checked === true) {
      let autoAdmit = setTimeout(function admit() {
        admitUserIfWaiting();
        if (toggleAutoAdmit.checked === true) {
          autoAdmit = setTimeout(admit, 200);
        }
      }, 200)
    }

  });


  let observerChatlist = new MutationObserver(mutations => {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(element => {
        if (element.getAttribute('data-sender-id') != "_self_") {
          let nguoiThamGia = element;
          if (element.classList.contains('oIy2qc')) {
            nguoiThamGia = element.parentElement.parentElement;
          }

          nguoiThamGia.querySelectorAll('.oIy2qc[data-message-text]').forEach(e => {
            if (ignoreUppercaseAndLowercase.checked) {
              if (e.getAttribute('data-message-text').toLowerCase().trim() == keyAttendance.toLowerCase().trim()) {
                const id = nguoiThamGia.getAttribute('data-sender-id').substring(nguoiThamGia.getAttribute('data-sender-id').lastIndexOf('/') + 1)
                const person = {
                  name: nguoiThamGia.getAttribute('data-sender-name'),
                  id: id
                }
                if (!dataAttendance.includes(person)) {
                  dataAttendance.push(
                    person
                  );
                }
              }
            }
            if (e.getAttribute('data-message-text') == keyAttendance) {
              const id = nguoiThamGia.getAttribute('data-sender-id').substring(nguoiThamGia.getAttribute('data-sender-id').lastIndexOf('/') + 1)
              const person = {
                name: nguoiThamGia.getAttribute('data-sender-name'),
                id: id
              }
              if (!dataAttendance.some(e => e.id === id)) {
                dataAttendance.push(
                  person
                );
              }
            }
          });
        }
      });
    })
  });

  let keyAttendance = '';
  let dataAttendance = [];
  const btnAttendanceKeyword = document.querySelector('.btn-attendance-keyword');
  const btnStopAttendanceKeyword = document.querySelector('.btn-stop-attendance-keyword');
  const inputKeyword = document.querySelector('.input-attendance-keyword');
  const ignoreUppercaseAndLowercase = document.querySelector('#ignoreUppercaseAndLowercase');

  btnAttendanceKeyword.addEventListener('click', function () {
    if (inputKeyword.value != '') {
      btnAttendanceKeyword.disabled = true;
      inputKeyword.disabled = true;
      ignoreUppercaseAndLowercase.disabled = true;
      keyAttendance = inputKeyword.value;
      btnStopAttendanceKeyword.classList.remove('d-none');
      textMessage.value = `Bắt đầu điểm danh theo từ khoá "${keyAttendance}" vào lúc ${(new Date()).toLocaleString()} `;
      btnSendMessage.disabled = false;
      btnSendMessage.click();
      observerChatlist.observe(listChat, { childList: true, subtree: true, characterData: true });
    }
  })


  btnStopAttendanceKeyword.addEventListener('click', function () {

    // lưu danh sách người
    chrome.storage.sync.set({ tablePerson: JSON.stringify(dataAttendance) });

    // gửi yêu cầu
    sendMessageBGJS('printTablePerson');

    btnAttendanceKeyword.disabled = false;
    inputKeyword.disabled = false;
    ignoreUppercaseAndLowercase.disabled = false;
    observerChatlist.disconnect();
    this.classList.add('d-none');

    // thông báo
    textMessage.value = `Kết thúc điểm danh theo từ khoá "${keyAttendance}" vào lúc ${(new Date()).toLocaleString()} `;
    btnSendMessage.disabled = false;
    btnSendMessage.click();
    dataAttendance = [];
  })

    
}


