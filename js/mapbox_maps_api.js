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

                var popupPho = new mapboxgl.Popup(marker)
                    .setLngLat(result)
                    .setHTML("<p>Pho Tre Bien</p>")
                    .addTo(map)

                marker.setPopup(popupPho)


            });

        geocode("9627 Sims Dr a, El Paso, TX 79925", mapBoxTokenAPI)
            .then(function(result) {
                console.log(result)

                var marker = new mapboxgl.Marker()
                    .setLngLat(result)
                    .addTo(map);

                var popupBam = new mapboxgl.Popup(marker)
                    .setLngLat(result)
                    .setHTML("<p>Bamboo Kitchen</p>")
                    .addTo(map)

                marker.setPopup(popupBam)


            });

        geocode("1360 George Dieter Dr, El Paso, TX 79936", mapBoxTokenAPI)
            .then(function(result) {
                console.log(result)

                var marker = new mapboxgl.Marker()
                    .setLngLat(result)
                    .addTo(map);

                var popupFam = new mapboxgl.Popup(marker)
                    .setLngLat(result)
                    .setHTML("<p>Bamboo Kitchen</p>")
                    .addTo(map)

                marker.setPopup(popupFam)


            });


    });












