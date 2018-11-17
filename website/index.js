mapboxgl.accessToken = 'pk.eyJ1IjoiY3dlc3QiLCJhIjoiY2o1bXZud21qMnZzMzJxb2Rlb2hlZW9jYSJ9.wQtsLUQZCKftfQhUWuJwcw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [-0.15591514, 51.51830379],
    zoom: 15.5,
    bearing: 27,
    pitch: 45,
    attributionControl: false
});

var chapters = {
    'Bad Saarow': {
        bearing: 27,
        center: [-0.15591514, 51.51830379],
        zoom: 15.5,
        pitch: 20
    },
    'Fürstenwalde': {
        duration: 6000,
        center: [12.095165, 54.084948],
        bearing: 150,
        zoom: 15,
        pitch: 0
    },
    'Rostock': {
        bearing: 90,
        center: [-0.08533793, 51.50438536],
        zoom: 13,
        speed: 0.6,
        pitch: 40
    },
    'Neuseeland': {
        bearing: 90,
        center: [0.05991101, 51.48752939],
        zoom: 12.3
    },
    'Australien': {
        bearing: 45,
        center: [-0.18335806, 51.49439521],
        zoom: 15.3,
        pitch: 20,
        speed: 0.5
    },
    'Berlin Wirtschaftsfachschule': {
        bearing: 180,
        center: [-0.19684993, 51.5033856],
        zoom: 12.3
    },
    'Berlin HTW Berlin1': {
        bearing: 90,
        center: [-0.10669358, 51.51433123],
        zoom: 17.3,
        pitch: 40
    },
    'Bath Livingmap': {
        bearing: 90,
        center: [-0.12416858, 51.50779757],
        zoom: 14.3,
        pitch: 20
    },
    'Berlin HTW Berlin2': {
        bearing: 90,
        center: [-0.12416858, 51.50779757],
        zoom: 15.3,
        pitch: 20
    }
};

// On every scroll event, check which element is on screen
function myFunction() {
    var chapterNames = Object.keys(chapters);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i]
        console.log(chapterName);
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'Bad Saarow';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;
    map.flyTo(chapters[chapterName]);
    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');
    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var container = document.getElementById('features');
    var contHeight = container.clientHeight;
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < contHeight && bounds.bottom > contHeight;
}
