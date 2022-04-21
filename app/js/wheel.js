(() => {
    const $ = document.querySelector.bind(document);
    let timer = 7000;
    let isRotating = false;
    let currentRotate = 0;
    const wheel = $('.wheel');
    const btnStart = $('.btn-start');
    const msg = $('.msg');
    const txtArea = document.querySelector('#list-name');
    var users = [];
    var listName = [];
    txtArea.addEventListener('input',Reset);
    function Reset() {
        listName = [];
        users = [];
        wheel.innerHTML = '';
        users = txtArea.value.split("\n");
        users.forEach(e => {
            listName.push({
                txtName: e,
                percent: 1/users.length
            });
        });
        console.log(listName);
        // console.log(users);
        const size = listName.length;
        const rotate = 360 / size;// Số góc 1 phần chiếm trong vòng quay
        const skewY = 90 - rotate;//Độ nghiêng của 1 item

        const renderItem = () => {
            const colors = ['#0d6efd','#6610f2','#6f42c1','#d63384','#dc3545','#fd7e14','#ffc107','#198754','#20c997','#0dcaf0'];
            let orderColors = 0;
            listName.forEach((item, index) => {
                const itemName = document.createElement('li');
                itemName.style.transform = `
                rotate(${rotate * index}deg)
                skewY(-${skewY}deg)
            `;
                itemName.innerHTML = `
            <p class="text-item ${index % 2 == 0 && 'even'}" 
                style="transform: skewY(${skewY}deg) rotate(${rotate / 2}deg);background: ${colors[orderColors]}"
            >
                <b>${item.txtName}</b>
            </p>
            `;
                wheel.appendChild(itemName);
                if (orderColors>=colors.length-1) {
                    orderColors = 0;
                }else{
                    orderColors++;
                }
            });
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
            }, timer);
            console.log(txt);
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
        })
        renderItem();
    }
})();