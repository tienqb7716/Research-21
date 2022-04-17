let html = `
<style>
body{
background: #6F36FF;
}
::selection{
color: #fff;
background: #6F36FF;
}
.wrapper-rs{
top: 60%;
left: 20%;
max-width: 450px;
width: 100%;
background: #fff;
border-radius: 10px;
transform: translate(-50%, -50%);
box-shadow: 10px 10px 15px rgba(0,0,0,0.06);
}
.wrapper-rs header{
font-size: 23px;
font-weight: 500;
padding: 17px 30px;
border-bottom: 1px solid #ccc;
}
.wrapper-rs header.active{
cursor: move;
user-select: none;
}
.wrapper-rs .content{
display: flex;
padding: 30px 30px 40px 30px;
align-items: center;
flex-direction: column;
justify-content: center;
}
.content .icon{
height: 95px;
width: 95px;
border-radius: 50%;
border: 5px solid #6F36FF;
display: flex;
align-items: center;
justify-content: center;
}
.content .icon i{
color: #6F36FF;
font-size: 60px;
}
.content .title{
margin: 15px 0;
font-size: 29px;
font-weight: 500;
}
.content p{
font-size: 16px;
text-align: center;
}
</style>
<div class="wrapper-rs"  style="position: fixed;  z-index: 9;">
<header>Draggable Div</header>
<div class="content">
  <div class="icon"><i class='bx bx-move'></i></div>
  <div class="title">Draggable Div</div>
  <p>This is a draggable div which is created using HTML CSS & JavaScript. You can move this div anywhere on the document or page.</p>
</div>
</div>
`
document.body.insertAdjacentHTML('afterbegin', html);
const wrapper = document.querySelector(".wrapper-rs"),
    header = wrapper.querySelector(".wrapper-rs>header");

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