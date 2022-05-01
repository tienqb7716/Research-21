function run() {
  const actions = {
    attendanceByKeyword: "attendanceByKeyword",
    stopAttendanceKeyword: "stopAttendanceKeyword",
    getListStudent: "getListStudent",
    reEnterLinkListStudent: "reEnterLinkListStudent",
    stopAttendanceTDC: "stopAttendanceTDC",
    startAttendanceTDC: "startAttendanceTDC",
    randomPerson: 'randomPerson'
  };

  const tagBtn = "data-extension-actions";

  const html = `<div class="wrapper-rs">
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
                  <p class="dropdown-item ps-4 dropdown-toggle px-2 m-0" href="#" role="button"
                      id="dropdownMenuLink" data-bs-toggle="dropdown" data-bs-auto-close="outside"
                      aria-expanded="false">
                      Điểm danh theo từ khoá
                  </p>
                  <div class="dropdown-menu menu-attendance-by-keyword" aria-labelledby="dropdownMenuLink">
                      <h6 class="dropdown-header">Điểm danh theo từ khoá</h6>
                      <div class="input-group mb-3 px-2">
                          <input type="text" class="form-control input-attendance-keyword"
                              placeholder="Nhập keyword" aria-label="Recipient's username"
                              aria-describedby="button-addon2">
                          <button class="btn btn-outline-primary btn-sm"
                              ${tagBtn}='${actions.attendanceByKeyword}' type="button">Điểm danh</button>
                      </div>
                      <div class="input-group mb-3 px-2">
                          <input class="form-check-input" type="checkbox" value=""
                              id="ignoreUppercaseAndLowercase">
                          <label class="form-check-label ps-2" for="ignoreUppercaseAndLowercase">
                              Bỏ qua chữ hoa và chữ thường
                          </label>
                          <div class="mt-3 w-100">
                          <div class="form-check " >
                              <input type="checkbox" class="form-check-input __checkBoxTimerAttendanceByKeyword" value="checkedValue">
                              <label for="__countdownTimerAttendanceByKeyword" class="form-label">Hẹn giờ</label>
                          </div>
                          <input type="range" class="form-range" min="1" max="60" value="5" step="1" disabled id="__countdownTimerAttendanceByKeyword">
                          <output class="ps-5">
                              5
                          </output>
                          <span>phút</span>
                      </div>
                      </div>
                      <div class="input-group mb-3 p-2">
                          <button type="button" class="btn btn-danger d-none"
                              ${tagBtn}='${actions.stopAttendanceKeyword}'>Kết thúc điểm
                              danh</button>
                      </div>
                  </div>
              </div>
              <div class="dropdown dropend">
                  <p class="dropdown-item ps-4 dropdown-toggle px-2 m-0" href="#" role="button"
                      id="dropdownMenuLink" data-bs-toggle="dropdown" data-bs-auto-close="false"
                      aria-expanded="false">
                      Điểm danh trang online.tdc.edu.vn
                  </p>
                  <div class="dropdown-menu p-3" aria-labelledby="dropdownMenuLink">
                      <h6 class="dropdown-header">Điểm danh trang online.tdc.edu.vn</h6>
                      <div class="input-group my-2">
                          <input type="text" class="form-control input-link-online"
                              placeholder="Nhập link danh sách">
                          <button class="btn btn-outline-primary btn-sm " ${tagBtn}='${actions.getListStudent}'
                              type="button">Lấy danh sách</button>
                          <button class="btn btn-outline-danger d-none btn-sm "
                              ${tagBtn}='${actions.reEnterLinkListStudent}' type="button">Nhập lại link</button>
                          <div class="valid-feedback">
                              Lấy danh sách sinh viên thành công
                          </div>
                          <div class="invalid-feedback">
                              Link danh sách sinh viên không hợp lệ
                          </div>
                      </div>
                      <div class=" mb-3 p-2 control-attendance-tdc d-none">
                          <div class="mb-3">
                              <label for="input-tiet-vang" class="form-label">Số tiết vắng</label>
                              <input type="number" class="form-control" min="1" max="9" id="input-tiet-vang"
                                  value="5">
                          </div>
                          <button type="button" class="btn rounded-pill btn-success mx-auto d-block"
                              ${tagBtn}='${actions.startAttendanceTDC}'>Bắt đầu</button>
                          <button type="button" class="btn rounded-pill btn-danger mx-auto d-block d-none"
                              ${tagBtn}='${actions.stopAttendanceTDC}'>Kết thúc</button>
                      </div>
                  </div>
              </div>
          </div>
          <li class='fw-bold' data-bs-toggle="modal" data-bs-target="#modelId">
              <i class="bi bi-clipboard-data"></i> Khảo sát
          </li>
          <li class='fw-bold'>
              <i class="bi bi-people"></i> Chia nhóm
          </li>
          <li class='fw-bold'  ${tagBtn}='${actions.randomPerson}'>
              <i class="bi bi-disc"></i> Ngẫu nhiên người tham gia
          </li class='fw-bold'>
          <li class='fw-bold' >
              <i class="bi bi-door-open"></i> Tự động xác nhận <span class="form-check float-end form-switch">
                  <input class="form-check-input __toggle-auto-admit" type="checkbox" role="switch"
                      id="toggleAutoAdmit">
              </span>
          </li>
          <li class='fw-bold' id="btn-mute-list">
              <i class="bi bi-mic-mute"></i> Lấy danh sách người không bật mic
          </li>
          <li class='fw-bold' id="btn-unraisehand-list">
              <i class="bi bi-mic-mute"></i> Lấy danh sách người không giơ tay
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
      `;
  // nhung link bootstrap
  document.head.insertAdjacentHTML(
    "afterbegin",
    `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">`
  );

  document.body.insertAdjacentHTML("afterbegin", html);

  const wrapper = document.querySelector(".wrapper-rs"),
    header = wrapper.querySelector(".wrapper-rs>header"),
    main = document.querySelector(".wrapper-rs .content");

  header.addEventListener("click", function () {
    main.classList.toggle("__hide");
  });

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

  // let btn = main.querySelector("#liveToastBtn");
  // let toastHtml = document.querySelector("#myToast");

  // /* Create toast instance */
  // let toast = new bootstrap.Toast(toastHtml, {
  //   autohide: false,
  // });

  // btn.addEventListener("click", function () {
  //   toastHtml.classList.remove("d-none");
  //   toast.show();
  // });

  // toastHtml.addEventListener("hidden.bs.toast", function () {
  //   toastHtml.classList.add("d-none");
  // });

  function admitUserIfWaiting() {
    const spanElements = document.getElementsByTagName("span");
    for (let i = 0; i < spanElements.length; i++) {
      const span = spanElements[i];
      // show list
      if (span.textContent == "View all" || span.textContent == "Xem tất cả") {
        console.log("ada beberapa peserta masuk");
        span.click();
      }

      // chấp nhận từng người
      if (span.textContent == "Admit" || span.textContent == "Chấp nhận") {
        console.log(`Admitting participant automatically.`);
        span.click();
      }
    }
  }

  const toggleAutoAdmit = document.querySelector(".__toggle-auto-admit");

  toggleAutoAdmit.addEventListener("click", function () {
    if (this.checked === true) {
      let autoAdmit = setTimeout(function admit() {
        admitUserIfWaiting();
        if (toggleAutoAdmit.checked === true) {
          autoAdmit = setTimeout(admit, 200);
        }
      }, 200);
    }
  });

  let observerChatlist = new MutationObserver((mutations) => {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach((element) => {
        if (element.getAttribute("data-sender-id") != "_self_") {
          let nguoiThamGia = element;
          if (element.classList.contains("oIy2qc")) {
            nguoiThamGia = element.parentElement.parentElement;
          }
          nguoiThamGia
            .querySelectorAll(".oIy2qc[data-message-text]")
            .forEach((e) => {
              if (ignoreUppercaseAndLowercase.checked) {
                if (
                  e.getAttribute("data-message-text").toLowerCase().trim() ==
                  keyAttendance.toLowerCase().trim()
                ) {
                  const id = nguoiThamGia
                    .getAttribute("data-sender-id")
                    .substring(
                      nguoiThamGia
                        .getAttribute("data-sender-id")
                        .lastIndexOf("/") + 1
                    );
                  const person = {
                    name: nguoiThamGia.getAttribute("data-sender-name"),
                    id: id,
                  };
                  if (!dataAttendance.includes(person)) {
                    dataAttendance.push(person);
                  }
                }
              }
              if (e.getAttribute("data-message-text") == keyAttendance) {
                const id = nguoiThamGia
                  .getAttribute("data-sender-id")
                  .substring(
                    nguoiThamGia
                      .getAttribute("data-sender-id")
                      .lastIndexOf("/") + 1
                  );
                const person = {
                  name: nguoiThamGia.getAttribute("data-sender-name"),
                  id: id,
                  datetime: (new Date().toLocaleString()),
                };
                if (!dataAttendance.some((e) => e.id === id)) {
                  dataAttendance.push(person);
                }
              }
            });
        }
      });
    });
  });

  main.querySelectorAll('.form-range').forEach(element => {
    element.addEventListener('input', function () {
      this.nextElementSibling.value = this.value
    })
  });

  // list lưu mssv của sinh viên đã Nhập

  let listIDStudentInMeet = [];

  let observerChatlistTDC = new MutationObserver((mutations) => {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach((element) => {
        if (element.getAttribute("data-sender-id") != "_self_") {
          let nguoiThamGia = element;
          if (element.classList.contains("oIy2qc")) {
            nguoiThamGia = element.parentElement.parentElement;
          }
          nguoiThamGia
            .querySelectorAll(".oIy2qc[data-message-text]")
            .forEach((e) => {
              let rgStudent = /^\d{5}[A-Za-z]{2}\d{4}$/;
              let idStudent = e.getAttribute("data-message-text").trim();
              if (rgStudent.test(idStudent)) {
                const idMeet = nguoiThamGia
                  .getAttribute("data-sender-id")
                  .substring(
                    nguoiThamGia
                      .getAttribute("data-sender-id")
                      .lastIndexOf("/") + 1
                  );
                const person = {
                  name: nguoiThamGia.getAttribute("data-sender-name"),
                  idMeet: idMeet,
                  id: idStudent,
                };
                let oldperson = listIDStudentInMeet.find(function (e) {
                  return e.idMeet == person.idMeet;
                });

                if (oldperson) {
                  listIDStudentInMeet[
                    listIDStudentInMeet.lastIndexOf(oldperson)
                  ].id = person.id;
                } else {
                  listIDStudentInMeet.push(person);
                }
              }
            });
        }
      });
    });
  });

  const actionsBtn = main.querySelectorAll(`[${tagBtn}]`);

  actionsBtn.forEach((btn) => {
    btn.addEventListener("click", executeAction);
  });

  let keyAttendance = "";
  let dataAttendance = [];
  let url = "";

  const ignoreUppercaseAndLowercase = main.querySelector(
    "#ignoreUppercaseAndLowercase"
  );

  let textMessage = document.querySelector("#bfTqV");
  let btnSendMessage = document.querySelector(
    ".VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.tWDL4c.Cs0vCd"
  );

  let listPersonFrame = document.querySelector("[role=list]");
  const observerlistPersonFrame = new MutationObserver(function (mutations) {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes[0]) {
        const img = mutation.addedNodes[0].querySelector("img.KjWwNd").src;
        const name =
          mutation.addedNodes[0].querySelector("span.zWGUib").textContent;
        const id = mutation.addedNodes[0].getAttribute("data-participant-id");
        personInMeet.push({
          img: img,
          name,
          name,
          id,
          id,
        });
        chrome.storage.sync.set({ [idGoogleMeet]: personInMeet });
      } else if (mutation.removedNodes[0]) {
        const id = mutation.removedNodes[0].getAttribute("data-participant-id");
        personInMeet = personInMeet.filter((el) => {
          return el.id != id;
        });
        chrome.storage.sync.set({ [idGoogleMeet]: personInMeet });
      }
    });
  });

  let personInMeet = [];
  let getListPersonframeSetTimeout = setTimeout(function getListPersonframe() {
    listPersonFrame = document.querySelector("[role=list]");
    if (listPersonFrame == null) {
      getListPersonframeSetTimeout = setTimeout(getListPersonframe, 200);
    } else {
      for (let i = 0; i < listPersonFrame.children.length; i++) {
        let img = listPersonFrame.children[i].querySelector("img.KjWwNd").src;
        let name =
          listPersonFrame.children[i].querySelector("span.zWGUib").textContent;
        let id = listPersonFrame.children[i].getAttribute(
          "data-participant-id"
        );
        personInMeet.push({
          img: img,
          name,
          name,
          id,
          id,
        });
        chrome.storage.sync.set({ [idGoogleMeet]: personInMeet });
      }
      observerlistPersonFrame.observe(listPersonFrame, { childList: true });
    }
  }, 200);

  let listChat = document.querySelector(".z38b6");
  let listStudent = [];

  function executeAction() {
    if (textMessage == null) {
      textMessage = document.querySelector("#bfTqV");
      btnSendMessage = document.querySelector(
        ".VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.tWDL4c.Cs0vCd"
      );
      listChat = document.querySelector(".z38b6");
    }
    switch (this.getAttribute(tagBtn)) {
      case actions.attendanceByKeyword:
        AttendanceKeyword(this);
        break;
      case actions.stopAttendanceKeyword:
        StopAttendanceKeyword(this);
        break;
      case actions.getListStudent:
        getListStudent(this);
        break;
      case actions.reEnterLinkListStudent:
        reInputLinkListStudent(this);
        break;
      case actions.startAttendanceTDC:
        startAttendanceTDC(this);
        break;
      case actions.stopAttendanceTDC:
        stopAttendanceTDC(this);
        break;
      case actions.randomPerson:
        {
          sendMessageBGJS("pageWheel", { idGoogleMeet: idGoogleMeet });
        }
        break;
      default:
        break;
    }
  }
  const countdownTimerAttendanceByKeywordRange = main.querySelector('#__countdownTimerAttendanceByKeyword');

  const checkCountdownTimerByKW = main.querySelector('.__checkBoxTimerAttendanceByKeyword');
  checkCountdownTimerByKW.addEventListener('change', function () {
    countdownTimerAttendanceByKeywordRange.disabled = !this.checked;
  })
  // bắt đầu điểm danh
  function AttendanceKeyword(target) {
    const inputKeyword = main.querySelector(".input-attendance-keyword");
    const btnStopAttendanceKeyword = main.querySelector(
      `[${tagBtn}=${actions.stopAttendanceKeyword}]`
    );
    console.log(countdownTimerAttendanceByKeywordRange.value * 60 * 1000);
    if (checkCountdownTimerByKW.checked === true) {
      setTimeout(function () {
        StopAttendanceKeyword(btnStopAttendanceKeyword);
      }, (countdownTimerAttendanceByKeywordRange.value * 60 * 1000));
    }
    if (inputKeyword.value != "") {
      target.disabled = true;
      keyAttendance = inputKeyword.value;
      main.querySelectorAll(".menu-attendance-by-keyword input").forEach(input => {
        input.disabled = true;
      });
      btnStopAttendanceKeyword.classList.remove("d-none");

      textMessage.value = `Bắt đầu điểm danh theo từ khoá "${keyAttendance}" vào lúc ${new Date().toLocaleString()} `;

      btnSendMessage.disabled = false;

      btnSendMessage.click();

      observerChatlist.observe(listChat, {
        childList: true,
        subtree: true
      });
    }
  }
  // kết thúc điểm danh
  function StopAttendanceKeyword(target) {
    // lưu danh sách người
    const actionBG = idGoogleMeet + '-tablePerson';
    chrome.storage.sync.set({ [actionBG]: dataAttendance });

    // gửi yêu cầu
    sendMessageBGJS("printTablePerson", { idGoogleMeet: idGoogleMeet });

    const btnAttendanceKeyword = main.querySelector(
      `[${tagBtn}=${actions.attendanceByKeyword}]`
    );
    btnAttendanceKeyword.disabled = false;
    main.querySelectorAll(".menu-attendance-by-keyword input").forEach(input => {
      input.disabled = true;
    });
    observerChatlist.disconnect();
    target.classList.add("d-none");

    // thông báo
    textMessage.value = `Kết thúc điểm danh theo từ khoá "${keyAttendance}" vào lúc ${new Date().toLocaleString()} `;
    btnSendMessage.disabled = false;
    btnSendMessage.click();
    dataAttendance = [];
  }
  // bat dau diem danh tdc
  function startAttendanceTDC(target) {
    const inputKeyword = main.querySelector("#input-tiet-vang");

    const btnstopAttendanceTDC = main.querySelector(
      `[${tagBtn}=${actions.stopAttendanceTDC}]`
    );
    const reEnterLinkListStudent = main.querySelector(
      `[${tagBtn}=${actions.reEnterLinkListStudent}]`
    );
    reEnterLinkListStudent.disabled = true;

    inputKeyword.disabled = true;

    btnstopAttendanceTDC.classList.remove("d-none");
    target.classList.add("d-none");

    textMessage.value = `Bắt đầu điểm danh vào trang TDC vào lúc ${new Date().toLocaleString()} \n Vui lòng sinh viên nhập mã số sinh viên. `;

    btnSendMessage.disabled = false;

    btnSendMessage.click();

    observerChatlistTDC.observe(listChat, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  // kêt thúc điểm danh TDC
  function stopAttendanceTDC(target) {
    let list = [];
    if (listIDStudentInMeet.length > 0) {
      list = listStudent.filter(function (e) {
        return listIDStudentInMeet.some(
          (student) => student.id.toLowerCase() != e.id.toLowerCase()
        );
      });
    } else {
      list = listStudent;
    }

    const soTiet = main.querySelector("#input-tiet-vang").value;
    const TDCOLINE = {
      url: url,
      list,
      list,
      soTiet,
      soTiet,
    };
    // lưu danh sách người
    chrome.storage.sync.set({ TDCOLINE: TDCOLINE });

    // gửi yêu cầu
    sendMessageBGJS("printAbsentStudents");

    // reset cac nut
    const reEnterLinkListStudent = main.querySelector(
      `[${tagBtn}=${actions.reEnterLinkListStudent}]`
    );
    reEnterLinkListStudent.disabled = false;
    reInputLinkListStudent(reEnterLinkListStudent);
    target.classList.add("d-none");
    const startAttendanceTDC = main.querySelector(
      `[${tagBtn}=${actions.startAttendanceTDC}]`
    );
    startAttendanceTDC.classList.remove("d-none");
    main.querySelector("#input-tiet-vang").disabled = false;

    // thông báo
    textMessage.value = `Kết thúc điểm danh vào trang TDC vào lúc ${new Date().toLocaleString()} `;
    btnSendMessage.disabled = false;
    btnSendMessage.click();
    listStudent = [];
    listIDStudentInMeet = [];
  }

  // lấy danh sách sinh viên
  function getListStudent(target) {
    listStudent = [];
    const input = main.querySelector(".input-link-online");
    const btnReenter = main.querySelector(
      `[${tagBtn}=${actions.reEnterLinkListStudent}]`
    );
    url = input.value;
    let rg1 =
      /^http\:\/\/online\.tdc\.edu\.vn\/Portlets\/Uis_Myspace\/Professor\/TeachDetail\/ListStudentAbsents\.aspx\?WSID=\d+$/;
    let rg2 =
      /^online\.tdc\.edu\.vn\/Portlets\/Uis_Myspace\/Professor\/TeachDetail\/ListStudentAbsents\.aspx\?WSID=\d+$/;
    if (rg1.test(url) || rg2.test(url)) {
      sendMessageBGJSGetStudentList("getListStudent", { url: url });
      input.disabled = true;
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      btnReenter.classList.remove("d-none");
      target.classList.add("d-none");
      const controlAttendanceTdc = document.querySelector(
        ".control-attendance-tdc"
      );
      controlAttendanceTdc.classList.remove("d-none");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
    }
  }

  function reInputLinkListStudent(target) {
    listStudent = [];
    const input = main.querySelector(".input-link-online");
    const btnGetLink = main.querySelector(
      `[${tagBtn}=${actions.getListStudent}]`
    );
    input.disabled = false;
    input.value = [];
    input.classList.remove("is-invalid");
    input.classList.remove("is-valid");
    btnGetLink.classList.remove("d-none");
    target.classList.add("d-none");
    const controlAttendanceTdc = document.querySelector(
      ".control-attendance-tdc"
    );
    controlAttendanceTdc.classList.add("d-none");
  }
  // gui yeu cau lay danh sach sinh vien
  async function sendMessageBGJSGetStudentList(type, data) {
    let result = await chrome.runtime.sendMessage(
      {
        type: type,
        data: data,
      },
      function (response) {
        if (response != undefined && response != "") {
          let div = document.createElement("div");
          div.innerHTML = response;
          div
            .querySelector("#grvListStudents")
            .querySelectorAll(".style31")
            .forEach((element) => {
              listStudent.push({
                class: element.children[2].children[0].innerHTML,
                id: element.children[1].children[0].textContent,
                firstname: element.children[3].children[0].textContent,
                lastname: element.children[4].children[0].textContent,
              });
            });
        } else {
          console.error("Can't get data");
        }
      }
    );
  }

  // gửi dữ liệu
  async function sendMessageBGJS(type, data) {
    let result = await chrome.runtime.sendMessage(
      {
        type: type,
        data: data,
      },
      function (response) {
        if (response != undefined && response != "") {
        } else {
          console.error("Can't get data");
        }
      }
    );
  }
}

const idGoogleMeet = document
  .querySelector("[rel=canonical]")
  .href.replace("https://meet.google.com/", "");

if (window.location.hostname === "meet.google.com") {
  let shutdownMeet;
  // kiểm tra thay đổi và lấy các đối tượng
  let observer = new MutationObserver((mutations) => {
    shutdownMeet = document.querySelector(".NHaLPe");
    if (shutdownMeet) {
      const btns = document.querySelectorAll(".r6xAKc button i");
      btns.forEach((element) => {
        if (element.textContent == "people_alt") {
          setTimeout(() => {
            element.click();
          }, 700);
        } else {
          if (element.textContent == "chat") {
            element.click();
          }
        }
      });
      run();
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
