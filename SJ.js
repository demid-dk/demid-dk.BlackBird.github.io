ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map('map', {
        center: [48.70855262247479,44.514865299619096],
        zoom: 15,
        controls:['routePanelControl','geolocationControl', 'rulerControl']
        }, {
        searchControlProvider: 'yandex#search'
    })
    // ????
    var control = myMap.controls.get('routePanelControl');

    // Зададим координаты пункта отправления с помощью геолокации.
    // Задание состояния для панели маршрутизации.
    control.routePanel.state.set({
        // Адрес начальной точки.
        from: control.routePanel.geolocate('from'),
        // Адрес конечной точки.
        //to: input
        to: [48.7060879, 44.50077584]
    });
    //Задаём только пешеходный маршрут
    control.routePanel.options.set({
        types: {
            "pedestrian": true
        }
    })

    // Получение мультимаршрута.
    var multiRoutePromise = control.routePanel.getRouteAsync();

    multiRoutePromise.then(function(multiRoute) {
        // Подписка на событие обновления мультимаршрута.
        multiRoute.model.events.add('requestsuccess', function() {

            console.log('success')

            var routes = multiRoute.model.getRoutes()
                route1 = routes[0];
            console.log (route1)
            //console.log (route1.getPoints())
            // Получение ссылки на активный маршрут.
            //var activeRoute = multiRoute.getActiveRoute();
            // Когда панель добавляется на карту, она
            // создает маршрут с изначально пустой геометрией. 
            // Только когда пользователь выберет начальную и конечную точки,
            // маршрут будет перестроен с непустой геометрией.
            // Поэтому для избежания ошибки нужно добавить проверку,
            // что маршрут не пустой.
            
            

            // var moveList = 'Трогаемся,</br>',
            //     way,
            //     segments;
            // // Получаем массив путей.
            // for (var i = 0; i < route1.getPaths().getLength(); i++) {
            //     way = route1.getPaths().get(i);
            //     segments = way.getSegments();
            //     for (var j = 1; j < segments.length; j++) {
            //         var street = segments[j-1].getStreet();
            //         moveList += ('Едем ' + segments[j].getHumanAction() + (street ? ' на ' + street : '') + ', проезжаем ' + Math.round(segments[j].getLength()) + ' м.,');
            //         moveList += '</br>'
            //         console.log(j.toString(), segments[j].getHumanAction(),' ', Math.round(segments[j].getLength()))
            //     }
            // }
            // moveList += 'Останавливаемся.';
            // Выводим маршрутный лист.
            //$('#list').append(moveList);
            
            // if (activeRoute) {

            // }
            
        })
    })
}