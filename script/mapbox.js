mapboxgl.accessToken = 'pk.eyJ1IjoiYWEzOTk5OCIsImEiOiJjazRjMjRhanowanFkM2VxcjV6anAyYTF4In0.r-STp90-9FIZOxVeWv0BZw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [104.54, 33.85],
    zoom: 3,
    bearing: 0,
    pitch: 20
});

var chapters = {
    'load_map': {
        bearing: 0,
        center: [104.54, 33.85],
        zoom: 3,
        pitch: 20
    },
    'baker': {
        bearing: 0,
        center: [104.54, 33.85],
        zoom: 3,
        pitch: 20
    },
    'aldgate': {
        duration: 4000,
        center: [124.55, 31.12],
        bearing: 0,
        zoom: 4.38,
        pitch: 20
    },
    'london-bridge': {
        duration: 4000,
        center: [132.15, 33.69],
        bearing: 0,
        zoom: 4.08,
        pitch: 20
    },
    'woolwich': {
        duration: 4000,
        center: [116.882, 22.463],
        zoom: 5.78,
        pitch: 20
    },
    'caulfield-gardens': {
        duration: 4000,
        bearing: 0,
        center: [112.28, 17.16],
        zoom: 4.7,
        pitch: 20
    },
    'telegraph': {
        duration: 4000,
        bearing: 0,
        center: [119.53, 16.73],
        zoom: 4.5,
        pitch: 20
    },
    'charing-cross': {
        duration: 4000,
        bearing: 0,
        center: [109.88, 12.21],
        zoom: 4.2,
        pitch: 20
    },
};

// On every scroll event, check which element is on screen
window.onscroll = function () {
    var chapterNames = Object.keys(chapters);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'baker';

function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    //need to update
    return bounds.top < window.innerHeight + 100 && bounds.bottom > 150;
}
