/*GROUPTREE GOOGLE MAPS PLUGIN 1.0 (16.05.2013) */
var mapStyles = [{ featureType: "water", elementType: "geometry", stylers: [{ visibility: "on" }, { saturation: -100 }, { lightness: 62 }] }, { featureType: "landscape", stylers: [{ visibility: "on" }, { lightness: -20 }, { saturation: -100 }] }, { featureType: "administrative", elementType: "geometry", stylers: [{ visibility: "off" }] }, { featureType: "poi", elementType: "geometry", stylers: [{ visibility: "off" }] }, { featureType: "administrative.province", elementType: "geometry", stylers: [{ visibility: "on" }] }, { featureType: "administrative.province", elementType: "labels", stylers: [{ visibility: "off" }] }, { featureType: "administrative.country", elementType: "labels", stylers: [{ visibility: "off" }] }, { featureType: "administrative.locality", elementType: "labels", stylers: [{ visibility: "on" }] }, { featureType: "administrative.neighborhood", elementType: "labels", stylers: [{ visibility: "off" }] }, { featureType: "road.local", elementType: "geometry", stylers: [{ saturation: -100 }, { lightness: -72 }, { visibility: "on" }] }, { featureType: "road.local", elementType: "labels", stylers: [{ visibility: "on" }, { invert_lightness: !0 }, { gamma: 9.99 }, { saturation: -100 }, { lightness: 10 }] }, { featureType: "road.arterial", elementType: "geometry", stylers: [{ visibility: "on" }, { saturation: -100 }, { lightness: -72 }] }, { featureType: "road.arterial", elementType: "labels", stylers: [{ visibility: "on" }, { saturation: -100 }, { invert_lightness: !0 }] }, { featureType: "road.highway", elementType: "geometry", stylers: [{ visibility: "off" }] }, { featureType: "road.highway", elementType: "labels", stylers: [{ visibility: "off" }] }, { featureType: "transit", elementType: "labels", stylers: [{ visibility: "off" }] }, { featureType: "transit", elementType: "geometry", stylers: [{ visibility: "off" }] }, { featureType: "poi.park", elementType: "labels", stylers: [{ visibility: "simplified" }] }, { featureType: "poi.business", stylers: [{ visibility: "off" }] }, { featureType: "poi.government", stylers: [{ visibility: "off" }] }, { featureType: "poi.medical", stylers: [{ visibility: "off" }] }, { featureType: "poi.place_of_worship", stylers: [{ visibility: "off" }] }, { featureType: "poi.school", stylers: [{ visibility: "off" }] }, { featureType: "poi", stylers: [{ visibility: "off" }] }, { featureType: "water", elementType: "labels", stylers: [{ visibility: "off" }, { saturation: -100 }, { lightness: 62 }] }];

gtMaps = function (options) {

    /*default options*/
    /**********************************************/
    var debug = true;
    var self = this;
    this.defaults = {
        mapOptions: {
            zoom: 13,
            center: {
                lat: 51.539022,
                long: -0.145224
            },
            mapId: "map-canvas",
            mapType: 0, //0 = road, 1 = satellite, 2 = hybrid, 3 = terrain...
            trafficButton: false,
            panControl: true,
            zoomControl: true,
            scaleControl: true,
            streetViewControl: false,
            overviewMapControl: true,
            mapTypeControl: false
        },
        infobox: {
            /*boxStyles: {
                background: "#fff",
                width: "160px",
                height: "190px",
                padding: '10px 15px 20px 40px'
            },*/
            infoBoxOffset: {
                left: 20,
                top: -200
            },
            planRouteHTML: "<a href='#' class='planRoute'>Plan route</a>" //you should keep the planRoute class in the clicable element.
        },
        markers: {
            xmlSource: null,
            markerSelector: ".map-marker",
            markerIco: null,
            markerActiveIco: null,
            activeMarkerZoom: 15,
            fitMarkers: true,
            enableStreetView: true,
            streetViewHTML: "<a href='#' class='streeview'>Street view</a>" //you should keep the streeview class in the clicable element.
        },
        addressFinder: {
            searchInputSelector: "#address",
            searchTriggerSelector: "#search",
            addressMarkerIco: "",
            enableDirections: false,
            directionsPanelSelector: "#directions-panel"
        },
        cluster: {
            enableCluster: true,
            gridSize: 35,
            maxZoom: 8,
            clusterStyles: [{
                textColor: 'white',
                url: '/assets/images/map/marker-cluster.png',
                height: 43,
                width: 43
            }]
        }
    };

    /*extends the default values with the selected options*/
    var opts = $.extend({}, this.defaults, options);
    if (options !== undefined) {
        opts.mapOptions = $.extend({}, this.defaults.mapOptions, options.mapOptions);
        opts.infobox = $.extend({}, this.defaults.infobox, options.infobox);
        if (options.infobox !== undefined) {
            opts.infobox.boxStyles = $.extend({}, this.defaults.infobox.boxStyles, options.infobox.boxStyles);
            opts.infobox.infoBoxOffset = $.extend({}, this.defaults.infobox.infoBoxOffset, options.infobox.infoBoxOffset);
        }
        opts.markers = $.extend({}, this.defaults.markers, options.markers);
        opts.addressFinder = $.extend({}, this.defaults.addressFinder, options.addressFinder);
    }

    /*variables*/
    /**********************************************/
    this.infoBoxOptions = {
        content: "",
        disableAutoPan: false,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(25, -175),
        zIndex: null,
        boxStyle: opts.boxStyles,
        closeBoxMargin: "0",
        closeBoxURL: "",
        infoBoxClearance: new google.maps.Size(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false
    };
    var selectedMaptype = google.maps.MapTypeId.ROADMAP;
    switch (opts.mapOptions.mapType) {
        case 0: selectedMaptype = google.maps.MapTypeId.ROADMAP;
            break;
        case 1: selectedMaptype = google.maps.MapTypeId.SATELLITE;
            break;
        case 2: selectedMaptype = google.maps.MapTypeId.HYBRID;
            break;
        case 3: selectedMaptype = google.maps.MapTypeId.TERRAIN;
            break;
        default: selectedMaptype = google.maps.MapTypeId.ROADMAP;
    };
    this.mapOptions = {
        zoom: opts.mapOptions.zoom,
        center: new google.maps.LatLng(opts.mapOptions.center.lat, opts.mapOptions.center.long),
        mapTypeId: selectedMaptype,
        panControl: opts.mapOptions.panControl,
        zoomControl: opts.mapOptions.zoomControl,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        scaleControl: opts.mapOptions.scaleControl,
        streetViewControl: opts.mapOptions.streetViewControl,
        overviewMapControl: opts.mapOptions.overviewMapControl,
        mapTypeControl: opts.mapOptions.mapTypeControl
    };
    this.mapWrapper_ID = opts.mapOptions.mapID;
    this.markersArray = [];
    this.countriesArray = [];
    this.geocoder = new google.maps.Geocoder();
    this.selectedRouteMarker = null;

    /*functions*/
    /**********************************************/

    /*gets the source from the XML passed*/
    this.getXMLData = function () {
        $.ajax({
            type: "GET",
            url: opts.markers.xmlSource,
            dataType: "xml",
            success: function (data) {
                self.addMarkersToMap($(data).find("marker"));
                self.getRequestedData();
            }
        });
    }

    /*gets the data from each DOM element with the selected class*/
    this.addMarkersToMap = function (sourceItems) {
        if (sourceItems.length)
            $(".js-no-results").hide();
        else
            $(".js-no-results").fadeIn();
        sourceItems.each(function () {
            var markerSource = $(this);
            self.parseMarkerSourceItem(markerSource);
        });
        if (self.markersArray.length >= 1) {
            if (opts.markers.fitMarkers)
                self.fitMarkers();
            if (opts.cluster.enableCluster)
                self.cluster();


        }
    }

    /*gets the data from the source of the marker*/
    this.parseMarkerSourceItem = function (markerSource) {
        var title = markerSource.attr('data-title');
        var markerPosition = null;
        if (self.checkProperty(markerSource.attr('data-lat')) && self.checkProperty(markerSource.attr('data-lat'))) {
            var lat = parseFloat(markerSource.attr('data-lat'));
            var long = parseFloat(markerSource.attr('data-long'));
            markerPosition = new google.maps.LatLng(lat, long);
            var markerOptions = {
                position: markerPosition,
                map: self.map,
                title: title
            }
            self.setMarker(markerOptions, markerSource);
        }
    }

    /*adds the propèrties to the marker and put it in the markers array*/
    this.setMarker = function (markerOptions, markerSource) {
        var marker = new google.maps.Marker(markerOptions);
        marker.sourceElement = markerSource;
        marker.innerHTML = markerSource.attr('data-infobox');
        marker.categoryPiD = markerSource.attr('data-category');
        marker.countryPiD = markerSource.attr('data-country');
        marker.PiD = markerSource.attr('data-pid');
        if (self.checkProperty(opts.markers.markerIco))
            marker.setIcon(opts.markers.markerIco);
        var customMarkerIco = markerSource.attr('data-icon');
        if (self.checkProperty(customMarkerIco))
            marker.setIcon(customMarkerIco);
        if (marker.innerHTML !== undefined)
            self.generateInfobox(marker, marker.innerHTML);
        self.bindMarkerSetActive(marker);
        self.markersArray.push(marker);
    }

    /*hides the markers from the map*/
    this.hideMarkers = function () {
        var arrayLength = self.markersArray.length;
        for (var i = 0; i < arrayLength; i++) {
            self.markersArray[i].setMap(null);
        }
        self.hideCluster();
    }

    /*shows the markers*/
    this.showAllMarkers = function () {
        self.hideCluster();
        var arrayLength = self.markersArray.length;
        for (var i = 0; i < arrayLength; i++) {
            self.markersArray[i].setMap(self.map);
        }
        self.fitMarkers();
        self.cluster();
    }

    /*filter the markers depending on its country/category*/
    this.filterMarkers = function () {
        self.hideMarkers();
        self.hideCluster();
        var arrayLength = self.markersArray.length;
        var countryValue = $("#input_parentFolderPiD").val();
        var categoryValue = $("#input_categoriesPiD").val();
        if (countryValue != "" && categoryValue != "") {
            for (var i = 0; i < arrayLength; i++) {
                if (self.markerBelongsToCategory(self.markersArray[i], categoryValue) && self.markerBelongsToCountry(self.markersArray[i], countryValue))
                    self.markersArray[i].setMap(self.map);
            }
        }
        if (countryValue != "" && categoryValue == "") {
            for (var i = 0; i < arrayLength; i++) {
                if (self.markerBelongsToCountry(self.markersArray[i], countryValue))
                    self.markersArray[i].setMap(self.map);
            }
        }
        if (countryValue == "" && categoryValue != "") {
            for (var i = 0; i < arrayLength; i++) {
                if (self.markerBelongsToCategory(self.markersArray[i], categoryValue))
                    self.markersArray[i].setMap(self.map);
            }
        }
        if (countryValue == "" && categoryValue == "") {
            for (var i = 0; i < arrayLength; i++) {
                self.markersArray[i].setMap(self.map);
            }
        }
        self.cluster();
    }

    /*checks if a marker belongs to a country*/
    this.markerBelongsToCountry = function (marker, countryPid) {
        if (marker.countryPiD == countryPid)
            return true;
    }

    /*checks if a marker belongs to a cateogy*/
    this.markerBelongsToCategory = function (marker, categoryPiD) {
        //if (marker.categoryPiD == categoryPiD)
        if (categoryPiD.indexOf(marker.categoryPiD) > -1)
            return true;
    }

    /*checks if the marker source contains icon information*/
    this.markerHasCustomIco = function (marker) {
        if (self.checkProperty(marker.sourceElement.attr('data-icon')) || self.checkProperty(marker.sourceElement.attr('data-active-icon')))
            return true;
        else
            return false;
    }

    this.removeProducTypeFilter = function () {
        $("#input_categoriesPiD").val("");
        removeQueryStringParameter("categoriesPiD");
        self.filterMarkers();
    }

    /*changes the icon of the marker and displays the infobox*/
    this.activateMarker = function (marker) {
        self.deactivateActiveMarker();
        self.removeProducTypeFilter();
        self.activateCountryByPID(marker.countryPiD);
        //self.showInfobox(marker);
        var hasCustomMarker = self.markerHasCustomIco(marker);
        if (!hasCustomMarker) {
            if (self.checkProperty(opts.markers.markerActiveIco))
                marker.setIcon(opts.markers.markerActiveIco);
        } else {
            var customMarkerIco = marker.sourceElement.attr('data-active-icon');
            if (self.checkProperty(customMarkerIco))
                marker.setIcon(customMarkerIco);
        }
        self.map.panTo(marker.getPosition());
        var zoom = null;
        if (opts.markers.activeMarkerZoom != 0)
            zoom = opts.markers.activeMarkerZoom;
        else if (self.checkProperty(marker.sourceElement.attr('data-zoom')))
            zoom = parseFloat(marker.sourceElement.attr('data-zoom'));
        if (zoom != null)
            self.changeZoom(zoom);
        self.selectedRouteMarker = null;

    }

    /*changes the icon of the active marker to default*/
    this.deactivateActiveMarker = function () {
        for (var i = 0; i < self.markersArray.length; i++) {
            var hasCustomMarker = self.markerHasCustomIco(self.markersArray[i]);
            if (!hasCustomMarker)
                self.markersArray[i].setIcon(opts.markers.markerIco);
            else if (self.checkProperty(self.markersArray[i].sourceElement.attr('data-icon')))
                self.markersArray[i].setIcon(self.markersArray[i].sourceElement.attr('data-icon'));
        }
        self.hideInfoboxes();
    }

    /*puts the markers in groups*/
    this.cluster = function (wrapAllMarkers) {
        self.hideCluster();

        zoomLevel = self.map.getZoom();

        var mcOptions = {
            gridSize: opts.cluster.gridSize,
            styles: opts.cluster.clusterStyles,
            maxZoom: opts.cluster.maxZoom
            //,
            //minimumClusterSize:1
        };

        if (zoomLevel <= 4) {
            mcOptions = {
                gridSize: opts.cluster.gridSize,
                styles: opts.cluster.clusterStyles,
                maxZoom: opts.cluster.maxZoom,
                minimumClusterSize: 1
            };
        }


        google.maps.event.addListener(self.map, 'zoom_changed', function () {

        });




        /*active markers*/
        var displayedMarkers = [];
        for (var i = 0; i < self.markersArray.length; i++) {
            if (self.markersArray[i].getMap() == self.map) {
                displayedMarkers.push(self.markersArray[i]);
            }
        }

        self.markerCluster = new MarkerClusterer(self.map, displayedMarkers, mcOptions);
    }

    /*hides the cluster*/
    this.hideCluster = function () {
        if (typeof (self.markerCluster) != "undefined") {
            self.markerCluster.clearMarkers();
            self.markerCluster.resetViewport();
        }
    }

    /*fit the markers to the map*/
    this.fitMarkers = function () {
        self.markerBound = new google.maps.LatLngBounds();
        var displayedMarkers = [];
        for (var i = 0; i < self.markersArray.length; i++) {
            if (self.markersArray[i].getMap() == self.map) {
                self.markerBound.extend(self.markersArray[i].getPosition());
            }
        }

        self.map.fitBounds(self.markerBound);
    }

    /*generates an infobox for each marker*/
    this.generateInfobox = function (marker, innerHTML) {
        var boxText = document.createElement("div");
        var lat = parseFloat(marker.sourceElement.attr('data-lat'));
        var long = parseFloat(marker.sourceElement.attr('data-long'));
        boxText.innerHTML = innerHTML;
        if (opts.addressFinder.enableDirections)
            boxText.innerHTML = boxText.innerHTML + opts.infobox.planRouteHTML;
        if (opts.markers.enableStreetView)
            boxText.innerHTML = boxText.innerHTML + opts.markers.streetViewHTML;
        var markerInfoboxOptions = self.infoBoxOptions;
        markerInfoboxOptions = {
            content: boxText.innerHTML,
            boxStyle: opts.infobox.boxStyles,
            pixelOffset: new google.maps.Size(opts.infobox.infoBoxOffset.left, opts.infobox.infoBoxOffset.top)
        }
        marker.infobox = new InfoBox(markerInfoboxOptions);
    }

    /*show the infobox once the marker has been set as active*/
    this.showInfobox = function (marker) {
        if (marker.infobox !== undefined) {
            marker.infobox.open(self.map, marker);
            google.maps.event.addListener(marker.infobox, 'domready', function () {
                $('.planRoute').click(function (e) {
                    e.preventDefault();
                    self.selectedRouteMarker = marker;
                    if ($(opts.addressFinder.searchInputSelector).val() == "")
                        $(opts.addressFinder.searchInputSelector).focus();
                    else
                        self.renderDirections();
                });
                $('.streeview').click(function (e) {
                    e.preventDefault();
                    self.selectedStViewMarker = marker;
                    self.showStreetView();
                });
            });
        }
    }

    /*start a search*/
    this.searchAddress = function () {
        self.deactivateActiveMarker();
        self.removeDirections();
        var address = $(opts.addressFinder.searchInputSelector).val();
        self.geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                self.removeAddressMarker();
                self.map.setCenter(results[0].geometry.location);
                self.addressMarker = new google.maps.Marker({
                    map: self.map,
                    position: results[0].geometry.location,
                    icon: opts.addressFinder.addressMarkerIco
                });
            } else {
                //alert("Search address was not successful for the following reason: " + status);
            }
        });
    }

    /*display the dicretions in the map and direction details panel*/
    this.renderDirections = function () {
        self.removeDirections();
        self.hideInfoboxes();
        self.removeAddressMarker();
        self.directionsService = new google.maps.DirectionsService();
        self.directionsDisplay = new google.maps.DirectionsRenderer();
        self.directionsDisplay.setMap(self.map);
        self.directionsDisplay.setPanel(document.getElementById('directions-panel'));
        var start = $(opts.addressFinder.searchInputSelector).val();
        var selectedMode = "DRIVING";
        if (document.getElementById("travelmode") !== undefined)
            var selectedMode = document.getElementById("travelmode").value;
        var request = {
            origin: start,
            destination: self.selectedRouteMarker.position,
            travelMode: google.maps.TravelMode[selectedMode]
        };
        self.directionsService.route(request, function (result, status) {
            if (status == google.maps.DirectionsStatus.OK)
                self.directionsDisplay.setDirections(result);
            //else
            // alert("Render route was not successful for the following reason: " + status);
        });
    }

    /*bind the events to start a search*/
    this.bindSearchEvent = function () {
        $(opts.addressFinder.searchTriggerSelector).click(function () {
            if (self.selectedRouteMarker == null)
                self.searchAddress();
            else
                self.renderDirections();
        });
    }

    /*binds the click event in each marker*/
    this.bindMarkerSetActive = function (marker) {
        var markerCode = marker.sourceElement.attr("data-pid");
        google.maps.event.addListener(marker, "mousedown", function () {
            self.activateMarker(this);
            if ($(".js-factory-dropdown").length) {
                $(".js-factory-dropdown option[value='" + markerCode + "']").prop('selected', true);
                $(".js-factory-dropdown").change();
            } else {
                $("#input_resultAssetPiD").val(markerCode);
                updateQueryStringParameter("resultAssetPiD", markerCode);
                updateMapInformation(false);
            }
        });
        $(marker.sourceElement).click(function (e) {
            e.preventDefault();
            self.activateMarker(marker);
        });
        $(marker.sourceElement).closest("select").change(function (e) {
            e.preventDefault();
            var select = $(this);
            if (select.val() == $(marker.sourceElement).attr("value"))
                self.activateMarker(marker);
        });
        $("body").on("change", ".js-factory-dropdown", function () {
            var select = $(this);
            if (select.val() == markerCode || $("#input_resultAssetPiD").val() == markerCode)
                self.activateMarker(marker);
        });
    }

    /*hides all the opened infoboxes*/
    this.hideInfoboxes = function () {
        for (var i = 0; i < self.markersArray.length; i++) {
            if (self.markersArray[i].infobox !== undefined)
                self.markersArray[i].infobox.close();
        }
    }

    /*remove the route from the map and detail panel*/
    this.removeDirections = function () {
        if (self.directionsDisplay != null && self.directionsDisplay !== undefined) {
            $(opts.addressFinder.directionsPanelSelector).html("");
            self.directionsDisplay.setMap(null);
            self.directionsDisplay = null;
        }
    }

    /*removes the marker of a succesful address*/
    this.removeAddressMarker = function () {
        if (self.addressMarker !== undefined)
            self.addressMarker.setMap(null);
    }

    /*changes the map zoom*/
    this.changeZoom = function (zoom) {
        self.map.setZoom(zoom);
    }

    /*checks if a property exists and contains something*/
    this.checkProperty = function (property) {
        return (property !== undefined && property != "" && property != null);
    }

    /*enables the traffic layer and show the trigger button*/
    this.addTrafficLayer = function () {
        var controlDiv = document.createElement('div');
        $(controlDiv).addClass('gmnoprint');
        var controlUI = document.createElement('div');
        $(controlUI).attr("style", "background:#fff;border:1px solid #717B87;margin:5px 0 0 0;padding:1px 6px;cursor:pointer;text-align:center;box-shadow:0 2px 4px rgba(0, 0, 0, 0.4);");
        controlDiv.appendChild(controlUI);
        var controlText = document.createElement('div');
        $(controlText).attr("style", "font-family:Arial,sans-serif; font-size: 13px;").attr("title", "Click to see the traffic").html('Traffic');
        controlUI.appendChild(controlText);
        self.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlDiv);
        self.trafficLayer = new google.maps.TrafficLayer();
        google.maps.event.addDomListener(controlUI, 'click', function () {
            if (typeof self.trafficLayer.getMap() == 'undefined' || self.trafficLayer.getMap() === null) {
                controlText.style.fontWeight = "bold";
                self.trafficLayer.setMap(self.map);
            } else {
                self.trafficLayer.setMap(null);
                controlText.style.fontWeight = "normal";
            }
        });
    }

    /*enables the street view and add the button into the infobox*/
    this.showStreetView = function () {
        self.panorama = self.map.getStreetView();
        self.panorama.setPosition(self.selectedStViewMarker.position);
        var headingAngle = 0;
        if (self.checkProperty(self.selectedStViewMarker.sourceElement.attr("data-heading")))
            headingAngle = parseFloat(self.selectedStViewMarker.sourceElement.attr("data-heading"));
        self.panorama.setPov({
            heading: 0,
            pitch: 0,
            heading: headingAngle
        });
        self.panorama.setVisible(true);
        self.map.setStreetView(self.panorama);
    }

    /*gets the parameter taht filter the countries to display*/
    this.getActiveCountryCodes = function () {
        var countryCodes = "";
        $(".js-countries-dropdown option").each(function () {
            var thisCountryCode = $(this).attr("data-code");
            if (countryCodes == "") {
                countryCodes = "'" + thisCountryCode + "'";
            } else {
                countryCodes = countryCodes + ", " + "'" + thisCountryCode + "'";
            }
        });
        return countryCodes;
    }

    /*hides the countries*/
    this.hideCountries = function () {
        if (typeof self.countriesArray !== "undefined") {
            var arrayLength = self.countriesArray.length;
            for (var i = 0; i < arrayLength; i++) {
                self.countriesArray[i].setMap(null);
            }
        }
    }

    /*shows the countries*/
    this.showCountries = function () {
        if (typeof self.countriesArray !== "undefined") {
            var arrayLength = self.countriesArray.length;
            for (var i = 0; i < arrayLength; i++) {
                self.countriesArray[i].setMap(self.map);
            }
        }
    }

    /*adds the table with the properties of the countries*/
    this.getCountriesPolygons = function () {
        // Initialize JSONP request
        var script = document.createElement('script');
        var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
        url.push('sql=');
        var query = 'SELECT CountryName, geometry, Iso2CodeCountry FROM ' +
            '16q5RxZMuptQoh2JPlBlSnGMYS6XQtyUyrv_VPTBL';

        var encodedQuery = encodeURIComponent(query);
        url.push(encodedQuery);
        url.push('&callback=map.drawCountries');
        url.push('&key=AIzaSyAm9yWCV7JPCTHCJut8whOjARd7pwROFDQ');
        script.src = url.join('');
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(script);

        /*this creates a script with this data*/
        //https://www.googleapis.com/fusiontables/v1/query?sql=SELECT%20*%20FROM%201tv_FBqVJNF2q0yqZJiS1YAw3kpNDsfifBtQp7ns&callback=map.drawCountries&key=AIzaSyAm9yWCV7JPCTHCJut8whOjARd7pwROFDQ
        //https://www.google.com/fusiontables/DataSource?docid=16q5RxZMuptQoh2JPlBlSnGMYS6XQtyUyrv_VPTBL&pli=1#rows:id=1
    }

    /*adds the countries to the map*/
    this.drawCountries = function () {
        self.hideCountries();
        self.getCountriesPolygons();
        self.drawCountries = function (data) {
            var rows = data['rows'];
            for (var i in rows) {
                var countryCodes = self.getActiveCountryCodes();
                var countryName = rows[i][0];
                var countryCode = rows[i][2];
                var countryExist = countryCodes.indexOf(countryCode);

                if (countryExist >= 1) {
                    var newCoordinates = [];
                    var geometries = rows[i][1]['geometries'];
                    if (geometries) {
                        for (var j in geometries) {
                            newCoordinates.push(self.constructCountryCoordinates(geometries[j]));
                        }
                    } else {
                        newCoordinates = self.constructCountryCoordinates(rows[i][1]['geometry']);
                    }
                    var randomnumber = Math.floor(Math.random() * 4);
                    var country = new google.maps.Polygon({
                        paths: newCoordinates,
                        strokeColor: "#000",
                        strokeOpacity: 0.7,
                        strokeWeight: 0.5,
                        fillColor: "#000",
                        fillOpacity: 0.3
                    });

                    self.bindCountryEvents(country, countryCode);
                    country.setMap(self.map);
                    var CountryPiD = $(".js-countries-dropdown option[data-code='" + countryCode + "']").val();
                    country.PiD = CountryPiD;
                    country.countryCode = countryCode;
                    country.countryName = countryName;
                    country.isActive = false;


                    /*add country labels*/

                    self.drawPoligonLabel(country);

                    self.countriesArray.push(country);

                }
            }
        }
        self.showCountries();

    }

    /*add a label to the pòligon*/
    this.drawPoligonLabel = function (country) {
        var labelText = country.countryName;
        var myOptions = {
            content: labelText,
            boxStyle: {
                border: "3px solid #FFF",
                background: "#000",
                textAlign: "center",
                fontSize: "16px",
                width: "100px",
                color: "#FFF",
                padding: "5px 2px",
                WebkitBorderRadius: "10px",
                MozBorderRadius: "10px",
                borderRadius: "10px",
                textTransform: "uppercase"
            },
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-100, 0),
            closeBoxURL: "",
            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: true
        };

        country.label = new InfoBox(myOptions);

        var bounds = new google.maps.LatLngBounds();
        bounds = country.getBounds();

        country.label.setPosition(bounds.getCenter());

    }

    /*gets the array of coordinates of a country*/
    this.constructCountryCoordinates = function (country) {
        var newCoordinates = [];
        var coordinates = country['coordinates'][0];
        for (var i in coordinates) {
            newCoordinates.push(
                new google.maps.LatLng(coordinates[i][1], coordinates[i][0]));
        }
        return newCoordinates;
    }

    /*bind events in countries*/
    this.bindCountryEvents = function (country, countryName) {
        google.maps.event.addListener(country, 'mouseover', function () {
            if (!this.isActive)
                this.setOptions({ fillOpacity: 0.6 });
        });
        google.maps.event.addListener(country, 'mouseout', function () {
            if (!this.isActive)
                this.setOptions({ fillOpacity: 0.4 });
        });

        google.maps.event.addListener(country, 'mousedown', function (e) {
            if (!this.isActive) {
                var countrycode = countryName;
                $(".js-countries-dropdown option[data-code='" + countrycode + "']").prop('selected', true);
                $(".js-countries-dropdown").change();
                self.activateCountry(country);
            }
        });
        $("body").on("change", ".js-countries-dropdown", function () {
            var countryValue = $("#input_parentFolderPiD").val();
            if (countryValue == country.PiD) {
                self.activateCountry(country);
            }
        });
        $("body").on("change", ".js-factory-dropdown", function () {
            if ($(this).val() == "") {
                var countryValue = $("#input_parentFolderPiD").val();
                if (countryValue == country.PiD) {
                    self.activateCountry(country);
                }
            }
        });
        google.maps.Polygon.prototype.getBounds = function () {
            var bounds = new google.maps.LatLngBounds();
            var paths = this.getPaths();
            var path;
            for (var i = 0; i < paths.getLength() ; i++) {
                path = paths.getAt(i);
                for (var ii = 0; ii < path.getLength() ; ii++) {
                    bounds.extend(path.getAt(ii));
                }
            }
            return bounds;
        }
    }


    /*activates the country*/
    this.activateCountry = function (country) {
        self.deactivateAllCountries();
        country.setOptions({
            strokeColor: "#FFFFFF", fillColor: "#304e89", fillOpacity: 0.8
        });
        country.label.open(self.map);
        country.isActive = true;
        self.filterMarkers(country.PiD);
        self.map.fitBounds(country.getBounds());
    }

    /*deactivates all countries*/
    this.deactivateAllCountries = function () {
        var arrayLength = self.countriesArray.length;
        for (var i = 0; i < arrayLength; i++) {
            var thiscountry = self.countriesArray[i];
            thiscountry.isActive = false;
            thiscountry.label.close();
            thiscountry.setOptions({
                strokeColor: "#000",
                fillColor: "#000",
                fillOpacity: 0.4
            });
        }
    }

    this.activateCountryByPID = function (countryPid) {
        var arrayLength = self.countriesArray.length;
        for (var i = 0; i < arrayLength; i++) {
            var thiscountry = self.countriesArray[i];
            if (thiscountry.PiD == countryPid)
                self.activateCountry(thiscountry);
        }
    }

    /*bind events outside the map object*/
    this.bindMapExternalEvents = function () {
        /*clikc in category*/
        $("body").on("click", ".js-click-filter-trigger[data-target='categoriesPiD']", function (e) {
            self.filterMarkers();
        });
        /*countries dropdown empty*/
        $("body").on("change", ".js-countries-dropdown", function () {
            if ($(this).val() == "") {
                self.showAllMarkers();
            }
        });
        /*clear map*/
        $("body").on("click", ".js-reset-filters-trigger", function (e) {
            e.preventDefault();
            if (typeof (map) !== "undefined") {
                map.showAllMarkers();
                map.deactivateActiveMarker();
                map.deactivateAllCountries();
            }
        });
    }

    /*gets the data posted in the url*/
    this.getRequestedData = function () {
        /*Requested country*/
        var requestedCountryPiD = $("body").find("#input_parentFolderPiD").val();
        if (typeof (requestedCountryPiD) !== "undefined" && requestedCountryPiD != "") {
            var arrayLength = map.countriesArray.length;
            for (var i = 0; i < arrayLength; i++) {
                var country = map.countriesArray[i];
                if (typeof (requestedCountryPiD) !== "undefined" && requestedCountryPiD == country.PiD) {
                    self.activateCountry(country);
                }
            }
        }
        /*Requested fatory*/
        var requestedMarkerPiD = $("body").find("#input_resultAssetPiD").val();
        if (typeof (requestedMarkerPiD) !== "undefined" && requestedMarkerPiD != "") {
            var arrayLength = map.markersArray.length;
            for (var i = 0; i < arrayLength; i++) {
                var marker = map.markersArray[i];
                if (typeof (requestedMarkerPiD) !== "undefined" && requestedMarkerPiD == marker.PiD) {
                    map.activateMarker(marker);
                }
            }
        }
    }

    /*initializes the main methods*/
    this.initialise = function () {
        $(opts.addressFinder.directionsPanelSelector).html("");
        self.map = new google.maps.Map(document.getElementById(opts.mapOptions.mapId), self.mapOptions);
        self.map.setOptions({
            styles: mapStyles
        });
        var opt = {
            minZoom: 3, maxZoom: 15
        };
        self.map.setOptions(opt);
        if (opts.mapOptions.trafficButton)
            self.addTrafficLayer();
        if (opts.markers.xmlSource != null)
            self.getXMLData();
        else
            self.addMarkersToMap($(opts.markers.markerSelector));
        self.bindSearchEvent();
        self.bindMapExternalEvents();
        self.drawCountries();
    }

    /*START APP*/
    this.initialise();

};
/*external public functions*/

/*set up the map*/
function reloadMapResults() {
    var dataSerializeInputs = $(".js-filtes-wrapper").find("input, select, textarea").serialize();
    map = new gtMaps({
        mapOptions: {
            zoom: 3,
            center: {
                lat: 51.539022,
                long: -0.145224
            },
            mapId: "map-canvas"
        },
        markers: {
            markerSelector: ".map-marker",
            fitMarkers: true,
            enableStreetView: false,
            xmlSource: "/documentation/map/sample.xml"
        }
    });
}

/*reload information*/
function updateMapInformation() {
    ajaxLoadingHTML = "<div class='ajax-loading inner'><div class='form-notification js-form-notification info'><div class='icon'><i class='fa fa-cog fa-spin text-gold'></i></div><div class='copy'><p><strong>Loading:</strong> Please wait...</p></div></div></div><div class='clearfix'></div>";
    /*get current values*/
    var dataSerializeInputs = "event=reloadMapInfo&" + $(".js-filtes-wrapper").find("input, select, textarea").not("#input_event").serialize();
    $(".js-map-info").removeClass("map-info-wrapper-shadow");
    $(".js-map-info").html(self.ajaxLoadingHTML);
    $.ajax({
        url: "/ajax/handler.aspx",
        data: dataSerializeInputs,
        type: 'POST',
        success: function (data) {
            $(".js-map-info").addClass("map-info-wrapper-shadow");
            $(".js-map-info").html(data);
        }
    });
}

var map = null;
$(document).ready(function () {
    reloadMapResults();
});