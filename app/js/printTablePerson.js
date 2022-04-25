
const tboby = document.querySelector('.table tbody')
let btn = document.querySelector('.export-to-excel');

chrome.storage.sync.get(['tablePerson'], function (result) {
  if (result.tablePerson != null) {
    const tablePerson = JSON.parse(result.tablePerson)
    console.log(tablePerson);
    let i = 1;
    tablePerson.forEach(element => {
      tboby.innerHTML += `
        <tr>
        <td >${i++}</td>
        <td>${element.name}</td>
         </tr>
        `
    });
    chrome.storage.sync.remove(['tablePerson']);
    btn.classList.remove('d-none');
  }
});
function ExportToExcel(type, fn, dl) {
  var elt = document.getElementById('table');
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl ?
    XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
    XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
}

btn.addEventListener('click',function () {
  ExportToExcel('xlsx');
})