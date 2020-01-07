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
        zoom: 1,
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
        center: [127.88, 36.45],
        bearing: 0,
        zoom: 6,
        pitch: 20
    },
    'london-bridge': {
        duration: 4000,
        center: [137.67, 38.43],
        bearing: 0,
        zoom: 5,
        pitch: 20
    },
    'woolwich': {
        duration: 4000,
        center: [114.122, 22.384],
        zoom: 9.6,
        pitch: 20
    },
    'gloucester': {
        bearing: 0,
        center: [113.544533, 22.198147],
        zoom: 12,
        pitch: 20
    },
    'caulfield-gardens': {
        bearing: 180,
        center: [-0.19684993, 51.5033856],
        zoom: 12.3
    },
    'telegraph': {
        bearing: 90,
        center: [-0.10669358, 51.51433123],
        zoom: 17.3,
        pitch: 40
    },
    'charing-cross': {
        bearing: 90,
        center: [-0.12416858, 51.50779757],
        zoom: 14.3,
        pitch: 20
    }
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
    return bounds.top < window.innerHeight+100 && bounds.bottom > 150;
}
