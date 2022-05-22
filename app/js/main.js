function run() {
  const actions = {
    attendanceByKeyword: "attendanceByKeyword",
    stopAttendanceKeyword: "stopAttendanceKeyword",
    getListStudent: "getListStudent",
    reEnterLinkListStudent: "reEnterLinkListStudent",
    stopAttendanceTDC: "stopAttendanceTDC",
    startAttendanceTDC: "startAttendanceTDC",
    randomPerson: "randomPerson",
    survey: "survey",
    stopSurvey: "stopSurvey"
  };

  const tagBtn = "data-extension-actions";

  const html = `<div class="wrapper-rs">
  <header style="text-align: center;">
      <i class="bi bi-tools"></i>
  </header>
  <div class="content __hide pt-3">
      <ul>
          <li class='fw-bold item-content' id="__diem-danh" data-bs-toggle="collapse"
              data-bs-target="#__diem-danh-collapse">
              <i class="bi bi-check-all"></i> Điểm danh
          </li>
          <div class="collapse " id="__diem-danh-collapse">
              <div class="dropdown dropend">
                  <p class="dropdown-item ps-4 dropdown-toggle px-2 m-0" href="#" role="button" id="dropdownMenuLink"
                      data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                      Điểm danh theo từ khoá
                  </p>
                  <div class="dropdown-menu menu-attendance-by-keyword" aria-labelledby="dropdownMenuLink">
                      <h6 class="dropdown-header">Điểm danh theo từ khoá</h6>
                      <div class="input-group mb-3 px-2">
                          <input type="text" class="form-control input-attendance-keyword" placeholder="Nhập keyword"
                              aria-label="Recipient's username" aria-describedby="button-addon2">
                          <button class="btn btn-outline-primary btn-sm" ${tagBtn}='${actions.attendanceByKeyword}'
                              type="button">Điểm danh</button>
                      </div>
                      <div class="input-group mb-3 px-2">
                          <input class="form-check-input" type="checkbox" value="" id="ignoreUppercaseAndLowercase">
                          <label class="form-check-label ps-2" for="ignoreUppercaseAndLowercase">
                              Bỏ qua chữ hoa và chữ thường
                          </label>
                          <div class="mt-3 w-100">
                              <div class="form-check ">
                                  <input type="checkbox" class="form-check-input __checkBoxTimerAttendanceByKeyword"
                                      value="checkedValue">
                                  <label for="__countdownTimerAttendanceByKeyword" class="form-label">Hẹn giờ</label>
                              </div>
                              <input type="range" class="form-range" min="1" max="60" value="5" step="1" disabled
                                  id="__countdownTimerAttendanceByKeyword">
                              <output class="ps-5">
                                  5
                              </output>
                              <span>phút</span>
                          </div>
                      </div>
                      <div class="input-group d-none p-2 text-center timer-${actions.attendanceByKeyword}">
                          Kết thúc sau &ensp; <span class="countdown-${actions.attendanceByKeyword}"></span>
                      </div>
                      <div class="input-group p-2">
                          <button type="button" class="btn btn-danger d-none"
                              ${tagBtn}='${actions.stopAttendanceKeyword}'>Kết thúc điểm
                              danh</button>
                      </div>
                  </div>
              </div>
              <div class="dropdown dropend">
                  <p class="dropdown-item ps-4 dropdown-toggle px-2 m-0" href="#" role="button"
                      data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                      Điểm danh trang online.tdc.edu.vn
                  </p>
                  <div class="dropdown-menu p-3">
                      <h6 class="dropdown-header">Điểm danh trang online.tdc.edu.vn</h6>
                      <div class="input-group my-2">
                          <input type="text" class="form-control input-link-online" placeholder="Nhập link danh sách">
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
                      <div class=" p-2 control-attendance-tdc d-none">
                          <div class="mb-3">
                              <label for="input-tiet-vang" class="form-label">Số tiết vắng</label>
                              <input type="number" class="form-control" min="1" max="9" id="input-tiet-vang"
                                  value="5">
                          </div>
                          <div class="my-3 w-100">
                              <div class="form-check ">
                                  <input type="checkbox"
                                      class="form-check-input __checkBox-${actions.startAttendanceTDC}"
                                      value="checkedValue">
                                  <label for="__countdown-${actions.startAttendanceTDC}" class="form-label">Hẹn
                                      giờ</label>
                              </div>
                              <input type="range" class="form-range" min="1" max="60" value="5" step="1" disabled
                                  id="__countdown-${actions.startAttendanceTDC}">
                              <output class="ps-5">
                                  5
                              </output>
                              <span>phút</span>
                          </div>
                          <div class="input-group d-none p-2 text-center timer-${actions.startAttendanceTDC}">
                              Kết thúc sau &ensp; <span class="countdown-${actions.startAttendanceTDC}"></span>
                          </div>
                          <button type="button" class="btn rounded-pill btn-success mx-auto d-block"
                              ${tagBtn}='${actions.startAttendanceTDC}'>Bắt đầu</button>
                          <button type="button" class="btn rounded-pill btn-danger mx-auto d-block d-none"
                              ${tagBtn}='${actions.stopAttendanceTDC}'>Kết thúc</button>
                      </div>
                  </div>
              </div>
          </div>
          <div class="dropdown dropend">
              <li class='fw-bold item-content' role="button" data-bs-toggle="dropdown" data-bs-auto-close="false"
                  aria-expanded="false">
                  <i class="bi bi-clipboard-data"></i> Khảo sát ý kiến
              </li>
              <div class="dropdown-menu p-3 overflow-auto menu-survey" aria-labelledby="dropdownMenuLink"
                  style="max-height: 450px;">
                  <h6 class="dropdown-header">Khảo sát ý kiến</h6>
                  <div class="">
                      <input type="text" class="form-control mb-3 input-link-online input-survey-question" required
                          placeholder="Câu hỏi khảo sát">
                      <div class="input-group mb-1 input-group-sm">
                              <input type="text" class="form-control" placeholder="Từ khoá" readonly>
                              <input type="text" class="form-control" placeholder="Ý kiến" readonly>
                      </div>
                      <div class="inputs-survey-choose">
                          <div class="input-group mb-1 input-survey-choose">
                              <input type="text" class="form-control" placeholder="Từ khoá" value="1">
                              <input type="text" class="form-control" placeholder="Ý kiến" value="Ý kiến 1">
                          </div>
                      </div>
                  </div>
                  <div class="text-center mt-3">
                      <button type="button" class="btn btn-sm btn-outline-secondary add-survey-choose"><i
                          class="bi bi-plus-circle"></i></button>
                  </div>
                  <div class=" p-2 control-survey ">
                      <div class="my-3 w-100">
                          <div class="form-check ">
                              <input type="checkbox" class="form-check-input __checkBox-${actions.survey}"
                                  value="checkedValue">
                              <label for="__countdown-${actions.survey}" class="form-label">Hẹn
                                  giờ</label>
                          </div>
                          <input type="range" class="form-range" min="1" max="60" value="5" step="1" disabled
                              id="__countdown-${actions.survey}">
                          <output class="ps-5">
                              5
                          </output>
                          <span>phút</span>
                      </div>
                      <div class="input-group d-none p-2 text-center timer-${actions.survey}">
                          Kết thúc sau &ensp; <span class="countdown-${actions.survey}"></span>
                      </div>
                      <button type="button" class="btn rounded-pill btn-success mx-auto d-block"
                          ${tagBtn}='${actions.survey}'>Bắt đầu</button>
                      <button type="button" class="btn rounded-pill btn-danger mx-auto d-block d-none"
                          ${tagBtn}='${actions.stopSurvey}'>Kết thúc</button>
                  </div>
              </div>
          </div>


          <li class='fw-bold item-content' ${tagBtn}='${actions.randomPerson}'>
              <i class="bi bi-disc"></i> Ngẫu nhiên người tham gia
          </li class='fw-bold'>
          <li class='fw-bold item-content'>
              <i class="bi bi-door-open"></i> Tự động xác nhận <span class="form-check float-end form-switch">
                  <input class="form-check-input __toggle-auto-admit" type="checkbox" role="switch"
                      id="toggleAutoAdmit">
              </span>
          </li>
          <li class='fw-bold item-content' id="btn-mute-list">
              <i class="bi bi-mic-mute"></i> Danh sách không bật mic
          </li>
          <li class='fw-bold item-content' id="btn-unraisehand-list">
              <i class="bi bi-person-dash"></i> Danh sách không giơ tay
          </li>
      </ul>
  </div>
</div>`;

  // nhung link bootstrap
  document.head.insertAdjacentHTML(
    "afterbegin",
    `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">`
  );

  document.body.insertAdjacentHTML("afterbegin", html);

  const idGoogleMeet = document
    .querySelector("[rel=canonical]")
    .href.replace("https://meet.google.com/", "");

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

  function admitUserIfWaiting() {
    const spanElements = document.getElementsByTagName("span");
    for (let i = 0; i < spanElements.length; i++) {
      const span = spanElements[i];
      // show list
      if (span.textContent == "View all" || span.textContent == "Xem tất cả") {
        span.click();
      }

      // chấp nhận từng người
      if (span.textContent == "Admit" || span.textContent == "Chấp nhận") {
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
                    datetime: new Date().toLocaleString()
                  };
                  if (!dataAttendance.some((e) => e.id === id)) {
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
                  datetime: new Date().toLocaleString(),
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

  main.querySelectorAll(".form-range").forEach((element) => {
    element.addEventListener("input", function () {
      this.nextElementSibling.value = this.value;
    });
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
        try {
          chrome.storage.sync.set({ [idGoogleMeet]: personInMeet });
        } catch (error) {

        }
      } else if (mutation.removedNodes[0]) {
        const id = mutation.removedNodes[0].getAttribute("data-participant-id");
        personInMeet = personInMeet.filter((el) => {
          return el.id != id;
        });
        try {
          chrome.storage.sync.set({ [idGoogleMeet]: personInMeet });
        } catch (error) {

        }
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
        try {
          chrome.storage.sync.set({ [idGoogleMeet]: personInMeet });
        } catch (error) {

        }
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
      case actions.survey:
        Survey(this);
        break;
      case actions.stopSurvey:
        StopSurvey(this);
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

  const countdownTimerAttendanceByKeywordRange = main.querySelector(
    "#__countdownTimerAttendanceByKeyword"
  );

  const checkCountdownTimerByKW = main.querySelector(
    ".__checkBoxTimerAttendanceByKeyword"
  );
  checkCountdownTimerByKW.addEventListener("change", function () {
    countdownTimerAttendanceByKeywordRange.disabled = !this.checked;
  });
  const timerAttendanceByKeyword = main.querySelector('.timer-' + actions.attendanceByKeyword);
  let countDownAttendanceByKeyword;
  let timeOutAttendanceByKeyword;
  // bắt đầu điểm danh
  function AttendanceKeyword(target) {
    const inputKeyword = main.querySelector(".input-attendance-keyword");
    const btnStopAttendanceKeyword = main.querySelector(
      `[${tagBtn}=${actions.stopAttendanceKeyword}]`
    );

    if (inputKeyword.value != "") {

      if (checkCountdownTimerByKW.checked === true) {
        timeOutAttendanceByKeyword = setTimeout(function () {
          StopAttendanceKeyword(btnStopAttendanceKeyword);
        }, countdownTimerAttendanceByKeywordRange.value * 60 * 1000);
        let countDownTime = countdownTimerAttendanceByKeywordRange.value * 60;
        let countdown = document.querySelector(`.countdown-${actions.attendanceByKeyword}`);
        countDownAttendanceByKeyword = setInterval(() => {
          countdown.textContent = Math.floor(countDownTime / 60) + ':' + countDownTime % 60 + 's ';
          countDownTime -= 1;
          if (countDownTime < 0) {
            clearInterval(countDownAttendanceByKeyword);
          }
        }, 1000);
        timerAttendanceByKeyword.classList.remove('d-none');
      }

      target.disabled = true;
      keyAttendance = inputKeyword.value;
      main
        .querySelectorAll(".menu-attendance-by-keyword input")
        .forEach((input) => {
          input.disabled = true;
        });
      btnStopAttendanceKeyword.classList.remove("d-none");

      textMessage.value = `Bắt đầu điểm danh theo từ khoá "${keyAttendance}" vào lúc ${new Date().toLocaleString()} `;

      btnSendMessage.disabled = false;

      btnSendMessage.click();

      observerChatlist.observe(listChat, {
        childList: true,
        subtree: true,
      });
    }
  }
  // kết thúc điểm danh
  function StopAttendanceKeyword(target) {
    timerAttendanceByKeyword.classList.add('d-none');
    if (countDownAttendanceByKeyword) {
      clearInterval(countDownAttendanceByKeyword);
    }
    if (timeOutAttendanceByKeyword) {
      clearTimeout(timeOutAttendanceByKeyword);
    }
    // lưu danh sách người
    const actionBG = idGoogleMeet + "-tablePerson";
    try {
      chrome.storage.sync.set({ [actionBG]: dataAttendance });
    } catch (error) {
      console.log(error);
    }
    // gửi yêu cầu
    sendMessageBGJS("printTablePerson", { idGoogleMeet: idGoogleMeet });

    const btnAttendanceKeyword = main.querySelector(
      `[${tagBtn}=${actions.attendanceByKeyword}]`
    );
    btnAttendanceKeyword.disabled = false;
    let inputs = main.querySelectorAll(".menu-attendance-by-keyword input");
    inputs.forEach(element => {
      if (element.disabled) {
        element.disabled = false;
      }
    });

    observerChatlist.disconnect();
    target.classList.add("d-none");

    // thông báo
    textMessage.value = `Kết thúc điểm danh theo từ khoá "${keyAttendance}" vào lúc ${new Date().toLocaleString()} `;
    btnSendMessage.disabled = false;
    btnSendMessage.click();
    dataAttendance = [];
  }

  const countdownTimerAttendanceByTDCRange = main.querySelector(
    `#__countdown-${actions.startAttendanceTDC}`
  );

  const checkCountdownTimerTDC = main.querySelector(
    `.__checkBox-${actions.startAttendanceTDC}`
  );
  checkCountdownTimerTDC.addEventListener("change", function () {
    countdownTimerAttendanceByTDCRange.disabled = !this.checked;
  });
  const timerAttendanceByTDC = main.querySelector('.timer-' + actions.startAttendanceTDC);
  let countdownTimerAttendanceByTDC;
  let timeOutAttendanceByTDC;
  // bat dau diem danh tdc
  function startAttendanceTDC(target) {
    const inputKeyword = main.querySelector("#input-tiet-vang");

    const btnstopAttendanceTDC = main.querySelector(
      `[${tagBtn}=${actions.stopAttendanceTDC}]`
    );
    const reEnterLinkListStudent = main.querySelector(
      `[${tagBtn}=${actions.reEnterLinkListStudent}]`
    );
    if (checkCountdownTimerTDC.checked === true) {

      let countDownTime = countdownTimerAttendanceByTDCRange.value * 60;

      timeOutAttendanceByTDC = setTimeout(function () {
        stopAttendanceTDC(btnstopAttendanceTDC);
      }, countDownTime * 1000);

      let countdown = main.querySelector(`.countdown-${actions.startAttendanceTDC}`);
      countdownTimerAttendanceByTDC = setInterval(() => {
        countdown.textContent = Math.floor(countDownTime / 60) + ':' + countDownTime % 60 + 's ';
        countDownTime -= 1;
        if (countDownTime < 0) {
          clearInterval(countdownTimerAttendanceByTDC);
        }
      }, 1000);
      timerAttendanceByTDC.classList.remove('d-none');
    }
    reEnterLinkListStudent.disabled = true;

    inputKeyword.disabled = true;
    let inputs = main.querySelectorAll('.control-attendance-tdc input');
    inputs.forEach(input => {
      if (!input.disabled) {
        input.disabled = true;
      }
    });
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
    timerAttendanceByTDC.classList.add('d-none');
    if (countdownTimerAttendanceByTDC) {
      clearInterval(countdownTimerAttendanceByTDC);
    }
    if (timeOutAttendanceByTDC) {
      clearTimeout(timeOutAttendanceByTDC);
    }
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
    let inputs = main.querySelectorAll('.control-attendance-tdc input');
    inputs.forEach(input => {
      if (input.disabled) {
        input.disabled = false;
      }
    });
    checkCountdownTimerByKW.disabled = false;
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

  //Khao sat 
  let inputSurveyChoose = main.querySelector('.inputs-survey-choose');
  const addSurveyChoose = main.querySelector('.add-survey-choose');
  let orderChoose = 1;
  addSurveyChoose.addEventListener('click', function () {
    inputSurveyChoose.innerHTML += ` <div class="input-group mb-1 input-survey-choose">
    <input type="text" class="form-control" placeholder="Từ khoá" value="${++orderChoose}">
    <input type="text" class="form-control" placeholder="Ý kiến" value="Ý kiến ${orderChoose}">
    </div>`
  });
  let keyBySurveyChoose = [];
  let surveyChooses = [];
  let listSurveyChooses = [];
  let observerSurvey = new MutationObserver((mutations) => {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach((element) => {
        let nguoiThamGia = element;
        if (element.classList.contains("oIy2qc")) {
          nguoiThamGia = element.parentElement.parentElement;
        }
        nguoiThamGia
          .querySelectorAll(".oIy2qc[data-message-text]")
          .forEach((e) => {
            let message = e.getAttribute("data-message-text").trim();
            if (keyBySurveyChoose.includes(message)) {
              const idMeet = nguoiThamGia
                .getAttribute("data-sender-id")
                .substring(
                  nguoiThamGia
                    .getAttribute("data-sender-id")
                    .lastIndexOf("/") + 1
                );

              let indexKey = keyBySurveyChoose.findIndex(function (e) {
                return e == message;
              });

              const person = {
                name: nguoiThamGia.getAttribute("data-sender-name"),
                idMeet: idMeet,
                selected: surveyChooses[indexKey]
              };


              let oldperson = listSurveyChooses.find(function (e) {
                return e.idMeet == person.idMeet;
              });

              if (oldperson) {
                listSurveyChooses[
                  listSurveyChooses.lastIndexOf(oldperson)
                ].selected = person.selected;
              } else {
                listSurveyChooses.push(person);
              }
            }
          });
      });
    });
  });

  const countdownTimerSurveyRange = main.querySelector(
    `#__countdown-${actions.survey}`
  );

  const checkCountdownTimerSurvey = main.querySelector(
    `.__checkBox-${actions.survey}`
  );
  checkCountdownTimerSurvey.addEventListener("change", function () {
    countdownTimerSurveyRange.disabled = !this.checked;
  });
  const timerSurvey = main.querySelector('.timer-' + actions.survey);
  const inputSurveyQuestion = main.querySelector('.input-survey-question');
  let countDownSurvey;
  let timeOutSurvey;
  let contentSurvey = "";
  let btnStopSurvey = main.querySelector(
    `[${tagBtn}=${actions.stopSurvey}]`
  );

  // bắt đầu Khao sat
  function Survey(target) {
    if (inputSurveyQuestion.value != "") {

      if (checkCountdownTimerSurvey.checked === true) {

        let countDownTime = countdownTimerSurveyRange.value * 60;

        timeOutSurvey = setTimeout(function () {
          StopSurvey(btnStopSurvey);
        }, countDownTime * 1000);

        let countdown = document.querySelector(`.countdown-${actions.survey}`);
        countDownSurvey = setInterval(() => {
          countdown.textContent = Math.floor(countDownTime / 60) + ':' + countDownTime % 60 + 's ';
          countDownTime -= 1;
          if (countDownTime < 0) {
            clearInterval(countDownSurvey);
          }
        }, 1000);

        timerSurvey.classList.remove('d-none');

      }

      target.classList.add('d-none');
      let question = inputSurveyQuestion.value;
      addSurveyChoose.disabled = true;
      main
        .querySelectorAll(".menu-survey input")
        .forEach((input) => {
          input.disabled = true;
        });

      btnStopSurvey.classList.remove("d-none");
      contentSurvey = `\nCâu hỏi khảo sát : "${question}" \n\nTừ khoá lựa chọn : Ý kiến khảo sát \n`
      let inputSurveyChooses = main.querySelectorAll('.input-survey-choose');

      for (let index = 0; index < inputSurveyChooses.length; index++) {
        const elementKey = inputSurveyChooses[index].children[0].value.trim();
        const surveyChoose = inputSurveyChooses[index].children[1].value.trim();
        keyBySurveyChoose.push(elementKey);
        surveyChooses.push(surveyChoose);
        contentSurvey += ` ${elementKey} : ${surveyChoose} \n`
      }
      textMessage.value = `Bắt đầu khảo sát vào lúc ${new Date().toLocaleString()} ` + contentSurvey;

      btnSendMessage.disabled = false;

      btnSendMessage.click();

      observerSurvey.observe(listChat, {
        childList: true,
        subtree: true,
      });
    }
  }

  // kết thúc khao sat
  function StopSurvey(target) {
    if (countDownSurvey) {
      clearInterval(countDownSurvey);
    }
    if (timeOutSurvey) {
      clearTimeout(timeOutSurvey);
    }
    // lưu danh sách người
    const actionBG = idGoogleMeet + "-survey";
    try {
      chrome.storage.sync.set({
        [actionBG]: {
          list: listSurveyChooses,
          labels: surveyChooses
        }
      });
    } catch (error) {
      console.log(error);
    }

    // gửi yêu cầu
    sendMessageBGJS("survey", { idGoogleMeet: idGoogleMeet });

    const btnSurvey = main.querySelector(
      `[${tagBtn}=${actions.survey}]`
    );
    addSurveyChoose.disabled = false;
    btnSurvey.classList.remove('d-none');
    timerSurvey.classList.add('d-none');
    target.classList.add('d-none');
    let question = inputSurveyQuestion.value;
    main
      .querySelectorAll(".menu-survey input")
      .forEach((input) => {
        input.disabled = false;
      });
    orderChoose = 0;
    inputSurveyChoose.innerHTML = ` <div class="input-group mb-1 input-survey-choose">
      <input type="text" class="form-control" placeholder="Từ khoá" value="${++orderChoose}">
      <input type="text" class="form-control" placeholder="Ý kiến" value="Ý kiến ${orderChoose}">
      </div>`
    keyBySurveyChoose = [];
    surveyChooses = [];
    listSurveyChooses = [];
    inputSurveyQuestion.value = '';
  }

  //#region 
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
    let result = await chrome.runtime.sendMessage({
      type: type,
      data: data,
    });
  }
}

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
window.addEventListener("beforeunload", (event) => {
  try {
    chrome.storage.sync.clear();
  } catch (error) { }
});
//#endregion