let html = `<style>
body {
  background: #6F36FF;
}

::selection {
  color: #fff;
  background: #6F36FF;
}

.wrapper-rs {
  top: 30%;
  left: 50%;
  max-width: 450px;
  width: 100%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
}

.wrapper-rs header {
  background-size: cover;
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
  left: -30%;
  top: 60px;
  padding: 30px 30px 40px 30px;
  background: #fff;
  z-index: 5;
  border-radius: 15px;
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
  transform: rotate(45deg);
  left: 45%;
  top: 0;
}

.content p {
  font-size: 16px;
}
</style>
<div class="wrapper-rs" style="position: fixed; z-index: 9;">
<header style="text-align: center;">
  <?xml version="1.0" ?><svg width="50px" height="50px" viewBox="0 0 64 64" id="Layer_1"
    style="enable-background:new 0 0 64 64;" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <style type="text/css">
      .st0 {
        fill: url(#SVGID_1_);
      }

      .st1 {
        fill: url(#SVGID_2_);
      }

      .st2 {
        fill: url(#SVGID_3_);
      }

      .st3 {
        fill: url(#SVGID_4_);
      }

      .st4 {
        fill: url(#SVGID_5_);
      }

      .st5 {
        fill: #FFFFFF;
      }

      .st6 {
        opacity: 0.6;
        fill: #FFFFFF;
      }

      .st7 {
        fill: url(#SVGID_6_);
      }

      .st8 {
        fill: url(#SVGID_7_);
      }

      .st9 {
        fill: url(#SVGID_8_);
      }

      .st10 {
        fill: url(#SVGID_9_);
      }

      .st11 {
        fill: url(#SVGID_10_);
      }

      .st12 {
        fill: url(#SVGID_11_);
      }

      .st13 {
        fill: url(#SVGID_12_);
      }

      .st14 {
        fill: url(#SVGID_13_);
      }

      .st15 {
        fill: url(#SVGID_14_);
      }

      .st16 {
        fill: url(#SVGID_15_);
      }

      .st17 {
        fill: url(#SVGID_16_);
      }

      .st18 {
        fill: url(#SVGID_17_);
      }

      .st19 {
        fill: url(#SVGID_18_);
      }

      .st20 {
        fill: url(#SVGID_19_);
      }

      .st21 {
        fill: url(#SVGID_20_);
      }

      .st22 {
        opacity: 0.2;
      }

      .st23 {
        fill: none;
        stroke: #FFFFFF;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-miterlimit: 10;
      }

      .st24 {
        fill: none;
        stroke: #FFFFFF;
        stroke-width: 3;
        stroke-linecap: round;
        stroke-miterlimit: 10;
      }

      .st25 {
        opacity: 0.5;
      }

      .st26 {
        fill: none;
        stroke: #FFFFFF;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-dasharray: 0.1, 5;
      }

      .st27 {
        opacity: 0.6;
        fill: none;
        stroke: #FFFFFF;
        stroke-width: 4;
        stroke-miterlimit: 10;
      }

      .st28 {
        opacity: 0.3;
      }
    </style>
    <linearGradient gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="11.992" x2="52.2484" y1="11.9781" y2="52.2346">
      <stop offset="0" style="stop-color:#A38CF3" />
      <stop offset="1" style="stop-color:#6B1AD6" />
    </linearGradient>
    <path class="st0"
      d="M57.2,60.5c-16.5,2-33.3,2-50.4,0c-1.7-0.2-3.1-1.6-3.3-3.3c-2-16.8-2-33.6,0-50.4c0.2-1.7,1.6-3.1,3.3-3.3  c16.8-2,33.7-2,50.5,0c1.7,0.2,3,1.5,3.3,3.2c2,16.5,2,33.3,0,50.5C60.3,58.9,58.9,60.3,57.2,60.5z" />
    <path class="st5"
      d="M32.5,37.9c-4.3-0.6-8.6-0.6-12.9,0c-2.4,0.4-4.4,2.1-5,4.5l-1.5,6.1c-0.3,1.3,0.6,2.5,1.9,2.5h22  c1.3,0,2.3-1.2,1.9-2.5l-1.5-6.1C36.9,40.1,34.9,38.3,32.5,37.9z" />
    <path class="st6" d="M32.3,26.3c0,3.5-2.8,8.1-6.3,8.1s-6.3-4.6-6.3-8.1S22.5,20,26,20S32.3,22.8,32.3,26.3z" />
    <g class="st22">
      <line class="st23" x1="34.6" x2="43.8" y1="21.7" y2="16.1" />
      <circle class="st23" cx="49.3" cy="12.8" r="3.2" />
      <line class="st23" x1="34.9" x2="44.3" y1="31.9" y2="37" />
      <circle class="st23" cx="49.9" cy="40.2" r="3.2" />
      <circle class="st5" cx="45.6" cy="27" r="1.5" />
      <circle class="st5" cx="33.6" cy="8" r="1.5" />
      <line class="st23" x1="41.6" x2="35.6" y1="27" y2="27" />
      <circle class="st5" cx="23" cy="8.8" r="1.5" />
      <line class="st23" x1="23.6" x2="24.4" y1="12.8" y2="17.5" />
      <line class="st23" x1="38.6" x2="35.6" y1="19.3" y2="11.2" />
    </g>
  </svg>
</header>
<div class="content __hide">
  <p>Điểm danh
    <br>
   Khảo sát
    <br>
   Chia nhóm
    <br>
   Tự động xác nhận 
    <br>
   Lấy danh sách người không bật mic
  </p>
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