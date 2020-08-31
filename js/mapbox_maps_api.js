geocode("701 Commerce St. Dallas, TX, 75202", mapBoxTokenAPI)
    .then(function(result) {
        console.log(result)
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-guidance-night-v4', // stylesheet location
            center: result, // starting position [lng, lat]
            zoom: 16 // starting zoom
        });

    });