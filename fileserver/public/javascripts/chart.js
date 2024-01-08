// public/chart.js
window.onload = function() {
    var data = {
        labels: ['LDH', '年齢', '歩行速度', 'RBC', ' 体重', '脅威', 'TG', 'eGFR'],
        datasets: [{
            label: '# of Votes',
            data: [9, 3, 3, 2, -2, -2, -2, -2],  // Green, Purple, Orangeをマイナスの値に変更
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    var options = {
        indexAxis: 'y',  // 横向きの棒グラフを作成
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false, // X軸の罫線を非表示にする
                }
            },
            y: {
                grid: {
                    display: false, // Y軸の罫線を非表示にする
                }
            }
        }
    };

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}
