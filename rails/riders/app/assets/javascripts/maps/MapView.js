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
      .setView(LOCATIONS.bernal.latlng, LOCATIONS.bernal.zoom)
      .addLayer(L.mapbox.tileLayer('examples.map-vyofok3q', {
          detectRetina: true
      }));

    // this.geocoder.query('San Francisco, CA', showMap);

    // function showMap(err, data) {
    //   that.map.fitBounds(data.lbounds);
    // };
  };

  Map.prototype = {

  };

  $(function() {
    
    window.map = new Map('#map');

  });

})(this);