let html = ` <div class="wrapper-rs">
<header style="text-align: center;">
  <i class="bi bi-tools"></i>
</header>
<div class="content __hide pt-3">
  <ul>
    <li id="__diem-danh">
      <i class="bi bi-check-all"></i> Điểm danh
    </li>
    <li data-bs-toggle="modal" data-bs-target="#modelId">
      <i class="bi bi-clipboard-data"></i> Khảo sát
    </li>
    <li > 
      <i class="bi bi-people"></i> Chia nhóm
    </li>
    <li>
      <i class="bi bi-disc"></i> Ngẫu nhiên người tham gia
    </li>
    <li>
      <i class="bi bi-door-open"></i> Tự động xác nhận
    </li>
    <li>
      <i class="bi bi-mic-mute"></i> Lấy danh sách người không bật mic
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
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save</button>
    </div>
  </div>
</div>
</div>
`
// nhung link bootstrap
document.head.insertAdjacentHTML('afterbegin', `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">`);
document.head.insertAdjacentHTML('afterbegin', `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">`);
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

let observer = new MutationObserver(mutations => {
  if (textMessage == null) {
    textMessage = document.querySelector('#bfTqV');
    btnSendMessage = document.querySelector('.VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.tWDL4c.Cs0vCd');
  }
});

observer.observe(document.body, { childList: true, subtree: true });
const btnDiemDanh = document.querySelector('#__diem-danh');
btnDiemDanh.addEventListener('click', function () {
  if (textMessage != null) {
    textMessage.value = "Bắt đầu điểm danh " + (new Date()).toLocaleString();
    btnSendMessage.disabled = false;
    btnSendMessage.click();
  }

})
