
const tboby = document.querySelector('.table tbody')

chrome.storage.sync.get(['tablePerson'], function (result) {
  if (result.tablePerson!=null) {
    const tablePerson = JSON.parse(result.tablePerson)
    console.log(tablePerson);
    let i = 1;
    tablePerson.forEach(element => {
      tboby.innerHTML += `
        <tr>
        <td >${i++}</td>
        <td >${element.id}</td>
        <td>${element.name}</td>
         </tr>
        `
    });
    chrome.storage.sync.remove(['tablePerson']);
  }
});