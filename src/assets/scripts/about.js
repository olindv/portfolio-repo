import "./modules/example";


//Секция - яндекс карты

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 10
    });
    myMap.behaviors.disable(['scrollZoom']);
    
    var coords = [ [56.00, 37.20] ];

    for (var i = 0; i<coords.length; i++) {
        
        var myPlacemarkWithContent = new ymaps.Placemark(coords[i], {
            hintContent: 'Здесь проживает Sponge Bob!',
            balloonContent: 'Квадратные штаны !',
        }, {
            iconLayout: 'default#image',
            iconImageHref: './assets/images/icons/map_marker.svg',
            iconImageSize: [60, 60],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
    
        });
    
        myMap.geoObjects
        .add(myPlacemarkWithContent);
    }
}