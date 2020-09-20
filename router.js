ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.745508, 37.435225],
            zoom: 13
            controls: ['routeButtonControl']
       
        });

    var control = myMap.controls.get('routeButtonControl');
    
    // Зададим координаты пункта отправления с помощью геолокации.
    control.routePanel.geolocate('from');
    control.state.set('expanded', true);
    var multiRoutePromise = control.routePanel.getRouteAsync();
    // Откроем панель для построения маршрутов.
    multiRoutePromise.then(function(multiRoute) {
    // Подписка на событие обновления мультимаршрута.
    multiRoute.model.events.add('requestsuccess', function() {
        // Получение ссылки на активный маршрут.
        var activeRoute = multiRoute.getActiveRoute();
        // Когда панель добавляется на карту, она
        // создает маршрут с изначально пустой геометрией. 
        // Только когда пользователь выберет начальную и конечную точки,
        // маршрут будет перестроен с непустой геометрией.
        // Поэтому для избежания ошибки нужно добавить проверку,
        // что маршрут не пустой.
        if (activeRoute) {
            // Вывод информации об активном маршруте.
            console.log("Длина: " + activeRoute.properties.get("distance").text);
            console.log("Время прохождения: " + activeRoute.properties.get("duration").text);
        }
    });
}, function (err) {
  console.log(err); 
});  
//     ymaps.route([
//         control.state.set('expanded', true)
//     ]).then(function (route) {
//         myMap.geoObjects.add(route);
//         // Зададим содержание иконок начальной и конечной точкам маршрута.
//         // С помощью метода getWayPoints() получаем массив точек маршрута.
//         // Массив транзитных точек маршрута можно получить с помощью метода getViaPoints.
//         var points = route.getWayPoints(),
//             lastPoint = points.getLength() - 1;
//         // Задаем стиль метки - иконки будут красного цвета, и
//         // их изображения будут растягиваться под контент.
//         points.options.set('preset', 'islands#redStretchyIcon');
//         // Задаем контент меток в начальной и конечной точках.
//         points.get(0).properties.set('iconContent', 'Точка отправления');
//         points.get(lastPoint).properties.set('iconContent', 'Точка прибытия');

//         // Проанализируем маршрут по сегментам.
//         // Сегмент - участок маршрута, который нужно проехать до следующего
//         // изменения направления движения.
//         // Для того, чтобы получить сегменты маршрута, сначала необходимо получить
//         // отдельно каждый путь маршрута.
//         // Весь маршрут делится на два пути:
//         // 1) от улицы Крылатские холмы до станции "Кунцевская";
//         // 2) от станции "Кунцевская" до "Пионерская".

//         var moveList = 'Трогаемся,</br>',
//             way,
//             segments;
//         // Получаем массив путей.
//         for (var i = 0; i < route.getPaths().getLength(); i++) {
//             way = route.getPaths().get(i);
//             segments = way.getSegments();
//             for (var j = 0; j < segments.length; j++) {
//                 var street = segments[j].getStreet();
//                 moveList += ('Едем ' + segments[j].getHumanAction() + (street ? ' на ' + street : '') + ', проезжаем ' + segments[j].getLength() + ' м.,');
//                 moveList += '</br>'
//             }
//         }
//         moveList += 'Останавливаемся.';
//         // Выводим маршрутный лист.
//         $('#list').append(moveList);
//     }, function (error) {
//         alert('Возникла ошибка: ' + error.message);
//     });
// }
