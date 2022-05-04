let muteListContainer =
    `
<div class="toast-style shadow">
    <div id="myToast" class="toast hide overflow-auto w-100 h-100 d-none" style="width: 300px; max-height: 350px;"
        role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header text-primary bg-white position-absolute mw-100 " style="width: 99%;">
            <strong class="me-auto list-title"></strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body mt-4 ">
            <p class="total-members">Tổng số: 0</p>
            <table class="table table-bordered mt-2">
                <thead>
                    <tr>
                        <th scope="col">Họ tên</th>
                        <th scope="col">Hình</th>
                    </tr>
                </thead>
                <tbody class="list-container">                             
                </tbody>
            </table>
        </div>
    </div>
</div>
`;

if (window.location.hostname === "meet.google.com") {
    let shutdownMeet;
    // kiểm tra thay đổi và lấy các đối tượng
    let observer = new MutationObserver((mutations) => {
        shutdownMeet = document.querySelector(".NHaLPe");
        if (shutdownMeet) {
            runMeet();
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

function runMeet() {
    document.body.insertAdjacentHTML('beforeend', muteListContainer);
    const wrapper = document.querySelector(".wrapper-rs");
    header = wrapper.querySelector(".wrapper-rs>header");
    main = document.querySelector(".wrapper-rs .content");
    let btnMuteList = main.querySelector("#btn-mute-list");
    let btnUnraiseHand = main.querySelector("#btn-unraisehand-list");
    let toastHtml = document.querySelector("#myToast");

    /* Create toast instance */
    let toast = new bootstrap.Toast(toastHtml, {
        autohide: false,
    });

    let personListTimeout = setTimeout(function getPersonList() {
        personList = document.querySelector(".AE8xFb.GvcuGe");
        let arrAllStudent;
        itemQty = document.querySelector('.total-members')
        let raiseHandObserver = document.querySelector('div[jscontroller=Qexnme]');
        let listTitle = document.querySelector('.list-title');

        let observeStudentQty = new MutationObserver(() => {
            itemQty.innerHTML = "Tổng số: " + qty;
        });

        let checkChangeMuteList = new MutationObserver((mutations) => {
            renderItem();
        });

        let checkChangeRaiseHandList = new MutationObserver(() => {
            renderItem2(arrAllStudent);
        });


        toastHtml.addEventListener('hidden.bs.toast', function () {
            observeStudentQty.disconnect();
            checkChangeMuteList.disconnect();
            checkChangeRaiseHandList.disconnect();
        })


        if (personList == null) {
            personListTimeout = setTimeout(getPersonList, 300);
        }
        else {
            listContainer = document.querySelector(".list-container");

            // Mute list listener
            btnMuteList.addEventListener("click", function () {
                listTitle.innerHTML = 'Danh sách không bật mic';
                toast.show();
                toastHtml.classList.toggle("d-none");

                qty = 0;
                renderItem();

                observeStudentQty.observe(listContainer, { childList: true, subtree: true, attributes: true });
                checkChangeMuteList.observe(personList, { childList: true, subtree: true, attributes: true });
            });

            btnUnraiseHand.addEventListener("click", function () {
                listTitle.innerHTML = 'Danh sách không giơ tay';
                toast.show();
                toastHtml.classList.toggle("d-none");

                arrAllStudent = Array.from(personList.children);

                qty = 0;
                renderItem2(arrAllStudent);

                observeStudentQty.observe(listContainer, { childList: true, subtree: true, attributes: true });
                checkChangeRaiseHandList.observe(raiseHandObserver, { childList: true, subtree: true, attributes: true });
            });
        }

        // FUNCTION: Render items
        function renderItem() {
            listContainer.innerHTML = '';

            for (let index = 0; index < personList.children.length; index++) {
                if (personList.children[index].querySelector('div.FTMc0c') != null) {
                    listContainer.innerHTML +=
                        `
                        <tr class="qty">
                            <td>${personList.children[index].querySelector('span.zWGUib').textContent}</td>
                            <td><img class="img-fluid item-img" src="${personList.children[index].querySelector('img.KjWwNd').src}"/></td>
                        </tr>
                        `;
                }
            }
            qty = document.querySelectorAll('.qty').length;
        }

        function renderItem2(arrAllStudent) {
            if (raiseHandObserver.children[1] != null) {
                let arrRaiseHandStudent = Array.from(raiseHandObserver.children[1].children);
                for (i = 0; i < arrRaiseHandStudent.length; i++) {
                    arrAllStudent = arrAllStudent.filter(item => item.children[0].children[0].children[0].src !== arrRaiseHandStudent[i].children[0].children[0].children[0].src);
                }
            }
            listContainer.innerHTML = '';

            for (let index = 0; index < arrAllStudent.length; index++) {
                listContainer.innerHTML +=
                    `
                    <tr class="qty">
                        <td>${arrAllStudent[index].querySelector('span.zWGUib').textContent}</td>
                        <td><img class="img-fluid item-img" src="${arrAllStudent[index].querySelector('img.KjWwNd').src}"/></td>
                    </tr>
                    `;
            }
            qty = document.querySelectorAll('.qty').length;
        }
    }, 300);

}




