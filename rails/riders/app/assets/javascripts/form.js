(function(window, undefined){
  var Evt = {
    selectors: {
      formCancel: '.js-cancel'
    },

    routes: {
      index: '/'
    },

    onFormCancel: function(e) {
      e.preventDefault();
      window.location.href = Evt.routes.index;
    }

  }


  $(function(){

    $(Evt.selectors.formCancel).on('click', Evt.onFormCancel);


  });

})(this);