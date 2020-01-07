Chart.defaults.global.animation.duration = 0;

window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

var inView = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

//Part 1 figure
$(window).scroll(function () {
    if (isScrolledIntoView('#Purpose_chart')) {
        if (inView) {
            return;
        }
        inView = true;
        var ctx = document.getElementById("Purpose_chart"),
            example = new Chart(ctx, {
                // 參數設定[註1]
                type: "horizontalBar", // 圖表類型
                data: {
                    labels: ["觀光", "業務","探親","會議","求學","醫療","展覽"], // 標題
                    datasets: [{
                        label: "旅臺人次", // 標籤
                        data: [53773516,5998463,2495204,521268,505488,383382,78636], // 資料
                        backgroundColor: [ // 背景色
                        'rgb(255, 0, 0)',
                        'rgb(255, 111, 111)',
                        'rgb(255, 145, 145)',
                        'rgb(255, 176, 176)',
                        'rgb(255, 194, 194)',
                        'rgb(255, 202, 202)',
                        'rgb(255, 212, 212)'
                        ],
                        borderColor: 'rgba(0, 0, 0, 0)',
                        borderWidth: 1 // 外框寬度
                    }]
                },
                options: {
                    legend: {
                        display: true,
                        position: 'bottom',
                    },
                    animation: {
                        duration: 1000,
                        easing: 'easeInCubic'
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                callback: function(value, index, values){
                                    return value / 1e6 +'M';
                                },
                                fontSize: 15,
                                fontFamily: "DFKai-SB",
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                fontSize: 20,
                                fontFamily: "DFKai-SB",
                            }
                        }]
                    }
                }
            });
    } else {
        inView = false;
    }
});


//Part2 figure
var Traveler_num_chart = document.getElementById('Traveler_num_chart');
var myChart = new Chart(Traveler_num_chart, {
    type: 'line',
    data: {
        labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
        datasets: [{
            label: '',
            data: [4395004, 5567277, 6087484, 7311470, 8016280, 9910204, 10439785, 10690279, 10739601, 11066707],
            backgroundColor: 'rgba(100, 99, 132, 0.2)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        responsive: true,
        devicePixelRatio: 1,
        tooltips: {
            mode: 'nearest'
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                },    
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: false
                },
                gridLines: {
                    drawBorder: false,
                },
				}]
        },
        legend: {
            display: false
        },
        animation: {
            duration: 1000
        },
        elements: {
            point: {
                radius: 0
            }
        }
    },
});

var event1_show = false;
var event2_show = false;
var event3_show = false;

var all_event_show = false;

$(window).scroll(function () {
    if ($(window).scrollTop() >= $('#event1').offset().top - 200 && $(window).scrollTop() < $('#event2').offset().top - 200) {

        all_event_show = false;
        event2_show = false;
        event3_show = false;

        if (event1_show) {
            return;
        }

        event1_show = true;
        myChart.data.datasets = [{
            label: '',
            data: [4395004, 5567277, 6087484, NaN, 8016280, 9910204, 10439785, 10690279, 10739601, 11066707],
            borderColor: window.chartColors.grey,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fill: false,
            cubicInterpolationMode: 'monotone'
        }, {
            label: '',
            data: [NaN, NaN, 6087484, 7311470, 8016280, NaN, NaN, NaN, NaN, NaN],
            borderColor: window.chartColors.red,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fill: false,
        }]
        myChart.options.animation.duration=0;
        myChart.update();
    } else if ($(window).scrollTop() >= $('#event2').offset().top - 200 && $(window).scrollTop() < $('#event3').offset().top - 200) {

        all_event_show = false;
        event1_show = false;
        event3_show = false;

        if (event2_show) {
            return;
        }

        event2_show = true;
        myChart.data.datasets = [{
            label: '',
            data: [4395004, 5567277, 6087484, 7311470, 8016280, NaN, 10439785, 10690279, 10739601, 11066707],
            borderColor: window.chartColors.grey,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fill: false,
            cubicInterpolationMode: 'monotone'
        }, {
            label: '',
            data: [NaN, NaN, NaN, NaN, 8016280, 9910204, 10439785, NaN, NaN, NaN],
            borderColor: window.chartColors.red,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fill: false,
        }]
        myChart.update();
    } else if ($(window).scrollTop() >= $('#event3').offset().top - 200) {

        all_event_show = false;
        event1_show = false;
        event2_show = false;

        if (event3_show) {
            return;
        }

        event3_show = true;
        myChart.data.datasets = [{
            label: '',
            data: [4395004, 5567277, 6087484, 7311470, 8016280, 9910204, 10439785, 10690279, NaN, NaN],
            borderColor: window.chartColors.grey,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fill: false,
            cubicInterpolationMode: 'monotone'
        }, {
            label: '',
            data: [NaN, NaN, NaN, NaN, NaN, NaN, NaN, 10690279, 10739601, 11066707],
            borderColor: window.chartColors.red,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fill: false,
        }]
        myChart.update();
    } else {
        event1_show = false;
        event2_show = false;
        event3_show = false;

        if (all_event_show) {
            return;
        }
        all_event_show = true;
        myChart.data.datasets = [{
            label: '',
            data: [4395004, 5567277, 6087484, 7311470, 8016280, 9910204, 10439785, 10690279, 10739601, 11066707],
            backgroundColor: 'rgba(100, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: false
        }]
        myChart.update();
    }
})
