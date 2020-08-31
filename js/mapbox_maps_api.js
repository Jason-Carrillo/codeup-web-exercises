mapboxgl.accessToken = mapBoxToken;



geocode("el paso, tx, 79938", mapBoxTokenAPI)
    .then(function(result) {
        console.log(result)
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-guidance-night-v4', // stylesheet location
            center: result, // starting position [lng, lat]
            zoom: 10 // starting zoom
        });

        geocode("12302 montana ave, el paso, tx, 79938", mapBoxTokenAPI)
            .then(function(result) {
                console.log(result)

                var marker = new mapboxgl.Marker()
                    .setLngLat(result)
                    .addTo(map);

            });


    });












