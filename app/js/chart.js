
//Input: name, selected, label
//setBackground cho row của sv
//Cập nhật liên tục

// Start input Data
// Data of chart

const urlParams = new URLSearchParams(window.location.search);
const idGoogleMeet = urlParams.get('idGoogleMeet');
try {
    chrome.storage.sync.get([idGoogleMeet], function (result) {
        data = result[idGoogleMeet];

        let inputLabels = data.labels;
        let inputObject = data.list;

        let userObject = [];
        let index = 0;
        inputObject.forEach(e => {
            //Trả về index của phần tử 
            inputLabels.indexOf(e.selected);
            userObject.push({
                index: inputLabels.indexOf(e.selected),
                name: e.name,
                selected: e.selected
            });
            index++;
        });

        let inputData = [];
        let countSelected = 0;
        inputLabels.forEach(e => {
            userObject.forEach(ev => {
                if (e == ev.selected) {
                    countSelected++;
                }
            });
            inputData.push(countSelected);
            countSelected = 0;
        });

        let inputBackground = ['#0d6efd', '#6610f2', '#6f42c1', '#d63384', '#dc3545', '#fd7e14', '#ffc107', '#198754', '#20c997', '#0dcaf0'];
        if (inputData.length > 10) {
            for (let i = 0; i < (inputData.length / 10); i++) {
                inputBackground.push(...inputBackground);
            }
        }

        let dataTable = document.querySelector('.data-table');
        let count = 1;
        userObject.forEach(e => {

            dataTable.innerHTML += `<tr style="background: ${inputBackground[e.index]};">
                        <th scope="row">${count}</th>
                        <td>${e.name}</td>
                        <td>${e.selected}</td>
                    </tr>`;
            count++;
        });

        let labelRatio = document.querySelector('.table-ratio');
        let countTitle = 0;
        inputLabels.forEach(e => {
            labelRatio.innerHTML += `<th scope="col" style="background: ${inputBackground[countTitle]}">${e}</th>`;
            countTitle++;
        });

        let dataRatio = document.querySelector('.data-ratio');
        let dataRatioQty = document.querySelector('.data-ratio-qty');
        let indexRatio = 0;
        let totalData = 0;
        inputData.forEach(e => {
            totalData += e;
        });
        inputData.forEach(e => {
            dataRatio.innerHTML += `
                        <td style="background: ${inputBackground[indexRatio]}">${(e / totalData * 100).toFixed(2)}%</td>
                    `;
            dataRatioQty.innerHTML += `
                        <td style="background: ${inputBackground[indexRatio]}">${e}</td>
                    `;
            indexRatio++;
        });

        //End input Data

        const dataPie = {
            labels: inputLabels,
            datasets: [{
                label: 'My First Dataset',
                data: inputData,
                backgroundColor: inputBackground,
                hoverOffset: 4
            }]
        };

        const configPie = {
            type: 'pie',
            data: dataPie,
            options: {
                scales: {
                },
                plugins: {
                    tooltip: {
                        enabled: false
                    },
                    datalabels: {
                        formatter: (value, context) => {
                            const datapoints = context.chart.data.datasets[0].data;
                            console.log(datapoints);
                            function totalSum(total, datapoint) {
                                return total + datapoint;
                            }
                            const totalValue = datapoints.reduce(totalSum, 0);
                            const percentageValue = (value / totalValue * 100).toFixed(1);
                            const display = [`${percentageValue}%`]
                            return display;
                        }
                    }
                }
            },
            plugins: [ChartDataLabels]
        };

        const myPie = new Chart(
            document.getElementById('myPie'),
            configPie
        );

        const ctx = document.getElementById('myChart');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: inputLabels,
                datasets: [{
                    label: '# of Votes',
                    data: inputData,
                    backgroundColor: inputBackground,
                    borderColor: inputBackground,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const onColumn = document.querySelector('#myChart');
        const onPie = document.querySelector('#myPie');
        const iconColumn = document.querySelector('.on-column');
        const iconPie = document.querySelector('.on-pie');
        iconColumn.addEventListener('click', async () => {
            onColumn.style.display = "block";
            onPie.style.display = "none";
        });
        iconPie.addEventListener('click', async () => {
            onColumn.style.display = "none";
            onPie.style.display = "block";
        });
    });
} catch (error) {

}
