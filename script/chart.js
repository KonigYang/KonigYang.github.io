Chart.defaults.global.animation.duration = 1000;

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
                type: "bar", // 圖表類型
                data: {
                    labels: ["展覽", "醫療", "求學", "會議", "探親", "業務", "觀光"], // 標題
                    datasets: [{
                        //label: "", // 標籤
                        data: [78636, 383382, 505488, 521268, 2495204, 5998463, 53773516], // 資料
                        backgroundColor: [ // 背景色
                        "#FF0000",
                        "#00FF00",
                        "#0000FF",
                        ],
                        borderWidth: 1 // 外框寬度
                    }]
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
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        devicePixelRatio: 1,
        tooltips: {
            mode: 'nearest'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
				}]
        },
        legend:{
            display: false
        }  
    }
});

var event1_show = false;
var event2_show = false;
var event3_show = false;

var all_event_show = false;

$(window).scroll(function () {
    if ($(window).scrollTop()>= $('#event1').offset().top-200 && $(window).scrollTop()< $('#event2').offset().top-200){
        
        all_event_show = false;
        event2_show = false;
        event3_show = false;
        
        if(event1_show){
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
        myChart.update();  
    }
    else if ($(window).scrollTop()>= $('#event2').offset().top-200 && $(window).scrollTop()< $('#event3').offset().top-200){
        
        all_event_show = false;
        event1_show = false;
        event3_show = false;
        
        if(event2_show){
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
    }
    
    else if ($(window).scrollTop()>= $('#event3').offset().top-200){
        
        all_event_show = false;
        event1_show = false;
        event2_show = false;
        
        if(event3_show){
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
    }
    
    else{
        event1_show = false;
        event2_show = false;
        event3_show = false;
        
        if(all_event_show){
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

//Part3 figure
var rankchart = document.getElementById("rankchart");
var mychart3 = new Chart(rankchart, {
        // 參數設定[註1]
        type: "horizontalBar", // 圖表類型
        data: {
            labels: ["展覽", "醫療", "求學", "會議", "探親", "業務", "觀光"], // 標題
            datasets: [{
                //label: "", // 標籤
                data: [78636, 383382, 505488, 521268, 2495204, 5998463, 53773516], // 資料
                backgroundColor: [ // 背景色
                "#FF0000",
                "#00FF00",
                "#0000FF",
                ],
                borderWidth: 1 // 外框寬度
            }]
        }
    });
