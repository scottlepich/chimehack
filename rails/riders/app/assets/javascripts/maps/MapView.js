(function(window, undefined){
  var LOCATIONS = {
    bernal: {
      latlng: [37.738, -122.417],
      zoom: 15
    }
  }


  var Map = function(selector) {
    var that = this;

    this.$el = $(selector);

    if (!this.$el.length) {
      return false;
    };


    /*
      Init Mapbox
    */
    this.geocoder = L.mapbox.geocoder('examples.map-vyofok3q');
    this.map = L.mapbox.map('map')
      .addLayer(L.mapbox.tileLayer('examples.map-vyofok3q', {
          detectRetina: true
      }));

    if (this.$el.data()) {
      this.parseData(this.$el.data());
    }
    else {
      this.map
        .setView(LOCATIONS.bernal.latlng, LOCATIONS.bernal.zoom)
    };

    // this.geocoder.query('San Francisco, CA', showMap);

    // function showMap(err, data) {
    //   that.map.fitBounds(data.lbounds);
    // };
  };

  Map.prototype = {
    parseData: function(data) {
      var g,
          that = this;

      this.map
        .setView(data.latlng, data.zoom);

      if ((g = data.geojson).length) {
        this.geoJson = {
          type: 'FeatureCollection',
          features: []
        };

        for (var i=0; i<g.length; i++) {
          that.geoJson.features.push(that.formatDatum(g[i]));
        }
        console.log(this.geoJson);
        this.map.markerLayer.setGeoJSON(this.geoJson);
      };

//       var geoJson = {
//     type: 'FeatureCollection',
//     features: [{
//         type: 'Feature',
//         properties: {
//             title: 'Washington, D.C.',
//             'marker-color': '#f00',
//             'marker-size': 'large',
//             url: 'http://en.wikipedia.org/wiki/Washington,_D.C.'
//         },
//         geometry: {
//             type: 'Point',
//             coordinates: [-77.03201, 38.90065]
//         }
//     },
//     {
//         type: 'Feature',
//         properties: {
//             title: 'Baltimore, MD',
//             'marker-color': '#f00',
//             'marker-size': 'large',
//             url: 'http://en.wikipedia.org/wiki/Baltimore'
//         },
//         geometry: {
//             type: 'Point',
//             coordinates: [-76.60767, 39.28755]
//         }
//     }]
// };

//       this.map.setView([39.12367, -76.81229], 9);
//       this.map.markerLayer.setGeoJSON(geoJson);
    },

    formatDatum: function(datum, options) {
      datum.geometry.coordinates[0] = parseInt(datum.geometry.coordinates[0]);

      datum.geometry.coordinates[1] = parseInt(datum.geometry.coordinates[1]);
      return datum;
      // options = options || {};
      // var f = {
      //   type: options.type || 'Feature',
      //   geometry: {
      //     options.geometry_type || 'Point',
      //     coordinates:
      //   }
      // }
    }
  };

  $(function() {
    
    window.map = new Map('#map');

  });

})(this);