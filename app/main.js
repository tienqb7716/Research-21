let html = `  <style>
.wrapper-rs {
  top: 50%;
  left: 50%;
  max-width: 450px;
  width: 100%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
}

.wrapper-rs header {
  background-size: cover;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.355);
  height: 50px;
  width: 50px;
  left: calc(50% - 25px);
  top: -75px;
  font-size: 1.5rem;line-height: 50px;color: navy;
}

.wrapper-rs header.active {
  cursor: move;
  user-select: none;
}

.wrapper-rs .content {
  position: absolute;
  left: -50%;
  top: 60px;
  background: #fff;
  z-index: 5;
  border-radius: 15px;
  transform: translateX(39%);
}

.wrapper-rs .content.__hide {
  display: none;
}

.wrapper-rs .content::before {
  content: '';
  width: 30px;
  height: 30px;
  background: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-15px) rotate(45deg);
  top: 0;
}
.content {
  font-size: 16px;
}
.content ul{
  list-style: none;
  padding: 0;
}
.content ul>li{
  border-bottom: 1px solid rgba(51, 51, 51, 0.279);
  display: block;
  line-height: 30px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  position: relative;
  border-radius: 10px ;
  z-index: 2;
}
.content ul>li:hover{
  background: rgb(165, 200, 224);
}
</style>
<div class="wrapper-rs" style="position: fixed; z-index: 9;">
<header style="text-align: center;">
<i class="bi bi-tools"></i>
</header>
<div class="content __hide">
  <ul>
    <li id="__diem-danh">
      Điểm danh
    </li>
    <li>
      Khảo sát
    </li>
    <li>
      Chia nhóm
    </li>
    <li>
      Ngẫu nhiên người 
    </li>
    <li>
      Tự động xác nhận 
    </li>
    <li>
      Lấy danh sách người không bật mic
    </li>
  </ul>
</div>
</div>`
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


let textMessage = document.querySelector('#bfTqV');
let btnSendMessage = document.querySelector('.VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.tWDL4c.Cs0vCd');
let observer = new MutationObserver(mutations => {
  if (textMessage == null) {
    textMessage = document.querySelector('#bfTqV');
    btnSendMessage = document.querySelector('.VfPpkd-Bz112c-LgbsSe.yHy1rc.eT1oJ.tWDL4c.Cs0vCd');
    console.log(textMessage);
  }
});

observer.observe(document.body, { childList: true, subtree: true });

const btnDiemDanh = document.querySelector('#__diem-danh');
btnDiemDanh.addEventListener('click', function () {
  textMessage.value = "Bắt đầu điểm danh " + (new Date()).toLocaleString();
  btnSendMessage.disabled = false;
  btnSendMessage.click();
})
