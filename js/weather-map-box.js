// mapboxgl.accessToken = mapBoxToken;
//
//
//
// geocode("El Paso, TX", mapBoxTokenAPI)
//     .then(function(result) {
//
//         var typedCitySearch = $("#box-city-search").val()
//         console.log(result)
//         var map = new mapboxgl.Map({
//             container: 'map',
//             style: 'mapbox://styles/mapbox/navigation-guidance-night-v4', // stylesheet location
//             center: result, // starting position [lng, lat]
//             zoom: 10 // starting zoom
//         });
//
//         geocode(typedCitySearch, mapBoxTokenAPI)
//             .then(function(result) {
//                 console.log(result)
//
//                 var marker = new mapboxgl.Marker()
//                     .setLngLat(result)
//                     .addTo(map);
//
//                 var popupPho = new mapboxgl.Popup(marker)
//                     .setLngLat(result)
//                     .setHTML("<p>Pho Tre Bien</p>")
//                 // .addTo(map)
//
//                 marker.setPopup(popupPho)
//
//
//             });
//
//
//     });







