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
body{
  background: blue;
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
  
</header>
<div class="content __hide">
  <ul>
    <li>
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