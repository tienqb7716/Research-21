(function run() {
    let totalUser = document.querySelector(".total");
    const isSoundDiv = document.querySelector("#is-sound");
    let onSound = document.querySelector(".on-sound");
    let offSound = document.querySelector(".off-sound");
    const txtArea = document.querySelector('#list-name');
    let isSound = true;
    let audio = new Audio('tick.mp3');
    let audio2 = new Audio('votay.mp3');
    const urlParams = new URLSearchParams(window.location.search);
    const idGoogleMeet = urlParams.get('idGoogleMeet');
    chrome.storage.sync.get([idGoogleMeet], update);

    function update(result) {
        const people = result[idGoogleMeet];
        let i = 0;
        people.forEach(person => {
            if (i < people.length - 1) {
                txtArea.value += `${person.name}\n`;
            } else {
                txtArea.value += `${person.name}`;
            }
            i++;
        });
        Reset();
    }
    const btnReset =  document.querySelector('#refesh');
    btnReset.addEventListener('click',function () {
        txtArea.value = '';
        chrome.storage.sync.get([idGoogleMeet], update);

    })
    isSoundDiv.addEventListener('click', async () => {
        if (isSound) {
            isSound = false;
            onSound.style.display = "none";
            offSound.style.display = "block";
            audio = null;
            audio2 = null;
        } else {
            audio = new Audio('tick.mp3');
            audio2 = new Audio('votay.mp3');
            isSound = true;
            onSound.style.display = "block";
            offSound.style.display = "none";
        }
    });
    function playSound() {
        audio.play();
    }
    let timer = 7000;
    txtArea.addEventListener('input', Reset);
    function Reset() {
        const $ = document.querySelector.bind(document);
        let isRotating = false;
        let currentRotate = 0;
        const wheel = $('.wheel');
        const btnStart = $('.btn-start');
        const msg = $('.msg');
        let users = [];
        let listName = [];
        if (isSound) {
            playSound();
        }
        listName = [];
        users = [];
        wheel.innerHTML = '';
        users = txtArea.value.split("\n");
        users.forEach(e => {
            listName.push({
                txtName: e,
                percent: 1 / users.length
            });
        });
        const size = listName.length;
        totalUser.innerHTML = size;
        const rotate = 360 / size;// Số góc 1 phần chiếm trong vòng quay
        const skewY = 90 - rotate;//Độ nghiêng của 1 item

        const renderItem = () => {
            const colors = ['#0d6efd', '#6610f2', '#6f42c1', '#d63384', '#dc3545', '#fd7e14', '#ffc107', '#198754', '#20c997', '#0dcaf0'];
            let orderColors = 0;
            if (size < 4) {
                if (size == 1) {
                    wheel.innerHTML = `<li style="transform: rotate(0deg);background-color: #dc3545;">
                    </li>
                    <li style="transform: rotate(90deg);background-color: #dc3545;">
                        <p class="text-item even" style="transform: skewY(0deg);background: #dc3545">
                            <b style="z-index: 5;position: absolute;left: 50%;">${listName[0].txtName}</b>
                        </p>
                    </li>
                    <li style="transform: rotate(180deg);background-color: #dc3545;">
                    </li>
                    <li style="transform: rotate(270deg);background-color: #dc3545;">
                        <p class="text-item even" style="transform: skewY(0deg);background: #dc3545">
                            <b style="z-index: 5;position: absolute;left: 50%;">${listName[0].txtName}</b>
                        </p>
                    </li>`;
                } else if (size == 2) {
                    wheel.innerHTML = `<li style="transform: rotate(0deg);background-color: #dc3545;">
                    </li>
                    <li style="transform: rotate(90deg);background-color: #dc3545;">
                        <p class="text-item even" style="transform: skewY(0deg);background: #dc3545">
                            <b style="z-index: 5;position: absolute;left: 50%;">${listName[0].txtName}</b>
                        </p>
                    </li>
                    <li style="transform: rotate(180deg);background-color: #ffc107;">
                    </li>
                    <li style="transform: rotate(270deg);background-color: #ffc107;">
                        <p class="text-item even" style="transform: skewY(0deg);background: #ffc107">
                            <b style="z-index: 5;position: absolute;left: 50%;">${listName[1].txtName}</b>
                        </p>
                    </li>`;
                } else if (size == 3) {
                    wheel.innerHTML = `<li style="transform: rotate(0deg);background-color: #dc3545;">
                    </li>
                    <li style="transform: rotate(30deg);background-color: #dc3545;">
                        <p class="text-item even" style="transform: skewY(0deg);background: #dc3545">
                            <b style="z-index: 5;position: absolute;left: 50%;">${listName[0].txtName}</b>
                        </p>
                    </li>
                    <li style="transform: rotate(120deg);background-color: #ffc107;">
                    </li>
                    <li style="transform: rotate(150deg);background-color: #ffc107;">
                        <p class="text-item even" style="transform: skewY(0deg);background: #ffc107">
                            <b style="z-index: 5;position: absolute;left: 50%;">${listName[1].txtName}</b>
                        </p>
                    </li>
                    <li style="transform: rotate(240deg);background-color: #0dcaf0;">
                    </li>
                    <li style="transform: rotate(270deg);background-color: #0dcaf0;">
                        <p class="text-item even" style="transform: skewY(0deg);background: #0dcaf0">
                            <b style="z-index: 5;position: absolute;left: 50%;">${listName[2].txtName}</b>
                        </p>
                    </li>`;
                }


            } else {
                listName.forEach((item, index) => {
                    const itemName = document.createElement('li');
                    itemName.style.transform = `
                    rotate(${rotate * index}deg)
                    skewY(-${skewY}deg)
                `;
                    console.log(itemName);
                    itemName.innerHTML = `
                <p class="text-item ${index % 2 == 0 && 'even'}" 
                    style="transform: skewY(${skewY}deg) rotate(${rotate / 2}deg);background: ${colors[orderColors]}"
                >
                    <b>${item.txtName}</b>
                </p>
                `;
                    wheel.appendChild(itemName);
                    if (orderColors >= colors.length - 1) {
                        orderColors = 0;
                    } else {
                        orderColors++;
                    }
                });
            }
        };
        const rotateWheel = (currentRotate, index) => {
            wheel.style.transform = `rotate(${currentRotate - index * rotate - rotate / 2
                }deg)`;
        };
        const getName = (randomNumber) => {
            let currentPercent = 0;
            let list = [];
            listName.forEach((item, index) => {
                currentPercent += item.percent;
                randomNumber <= currentPercent && list.push({
                    ...item, index
                });
            });
            return list[0];
        }

        const showTxtName = (txt) => {
            setTimeout(() => {
                isRotating = false;
                msg.innerHTML = `Chúc mừng ${txt} là người may mắn được chọn`
                document.querySelector('.pyro').style.display = "block";
                if (isSound) {
                    audio2.play();
                }
            }, timer);
        }

        const start = () => {
            isRotating = true;
            msg.innerHTML = "";
            const random = Math.random();
            const name = getName(random);
            currentRotate += 360 * 10;
            rotateWheel(currentRotate, name.index);
            showTxtName(name.txtName);
        }
        btnStart.addEventListener('click', () => {
            !isRotating && start();
            let jump = 100;
            document.querySelector('.pyro').style.display = "none";
            //Audio repeat
            if (isSound) {
                while (jump < (timer - 1000)) {
                    jump *= 1.2;
                    setTimeout(playSound, jump);
                }
            }
        })
        renderItem();
    }
})();

