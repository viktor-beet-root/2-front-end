function initMap() {
    const mapElement = document.getElementById("map");

    const kords = { lat: 50.44875016440708, lng: 30.513335755743782 };

    const styledMapType = new google.maps.StyledMapType(
        [
            { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
            {
                featureType: "administrative",
                elementType: "geometry.stroke",
                stylers: [{ color: "#c9b2a6" }],
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "geometry.stroke",
                stylers: [{ color: "#dcd2be" }],
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels.text.fill",
                stylers: [{ color: "#ae9e90" }],
            },
            {
                featureType: "landscape.natural",
                elementType: "geometry",
                stylers: [{ color: "#dfd2ae" }],
            },
            {
                featureType: "poi",
                elementType: "geometry",
                stylers: [{ color: "#dfd2ae" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#93817c" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{ color: "#a5b076" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#447530" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#f5f1e6" }],
            },
            {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{ color: "#fdfcf8" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#f8c967" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#e9bc62" }],
            },
            {
                featureType: "road.highway.controlled_access",
                elementType: "geometry",
                stylers: [{ color: "#e98d58" }],
            },
            {
                featureType: "road.highway.controlled_access",
                elementType: "geometry.stroke",
                stylers: [{ color: "#db8555" }],
            },
            {
                featureType: "road.local",
                elementType: "labels.text.fill",
                stylers: [{ color: "#806b63" }],
            },
            {
                featureType: "transit.line",
                elementType: "geometry",
                stylers: [{ color: "#dfd2ae" }],
            },
            {
                featureType: "transit.line",
                elementType: "labels.text.fill",
                stylers: [{ color: "#8f7d77" }],
            },
            {
                featureType: "transit.line",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#ebe3cd" }],
            },
            {
                featureType: "transit.station",
                elementType: "geometry",
                stylers: [{ color: "#dfd2ae" }],
            },
            {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [{ color: "#b9d3c2" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#92998d" }],
            },
        ],
        { name: "Styled Map" }
    );

    const options = {
        center: kords,
        zoom: 15,
        //mapTypeId: "satellite",
        //fullscreenControl: false
        mapTypeControlOptions: {
            mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
        },
    }

    const map = new google.maps.Map(mapElement, options);

    map.mapTypes.set("styled_map", styledMapType);
    map.setMapTypeId("styled_map");

    const trafficLayer = new google.maps.TrafficLayer();

    trafficLayer.setMap(map);

    const marker = new google.maps.Marker({
        position: kords,
        map,
        title: "Hello World!",
        icon: 'http://maps.google.com/mapfiles/kml/pal2/icon16.png'
    });

    const marker1 = new google.maps.Marker({
        position: { lat: 50.449128712891415, lng: 30.512284453518756 },
        map,
        title: "Hello World!",
        icon: 'http://maps.google.com/mapfiles/kml/pal2/icon28.png'
    });

    const contentString =
        '<div class="dd" id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
        "sandstone rock formation in the southern part of the " +
        "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
        "south west of the nearest large town, Alice Springs; 450&#160;km " +
        "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
        "features of the Uluru - Kata Tjuta National Park. Uluru is " +
        "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
        "Aboriginal people of the area. It has many springs, waterholes, " +
        "rock caves and ancient paintings. Uluru is listed as a World " +
        "Heritage Site.</p>" +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
        "(last visited June 22, 2009).</p>" +
        "</div>" +
        "</div>";

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    marker.addListener("mouseover", () => {
        infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
    });

    const flightPlanCoordinates = [
        { lat: 50.448566866158004, lng: 30.513216858468333 },
        { lat: 50.44837161289425, lng: 30.5142931916987161 },
        { lat: 50.44892150778044, lng: 30.514524728498273 },
        { lat: 50.448574835661866, lng: 30.516739972472436 },
    ];

    const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#000000",
        strokeOpacity: 1.0,
        strokeWeight: 6,
    });

    flightPath.setMap(map);
}

window.initMap = initMap;
