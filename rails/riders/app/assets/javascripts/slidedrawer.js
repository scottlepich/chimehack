(function(){
  var Slideout = {

    selectors: {
      hide: 'hidden'
    },

    click: function(e) {
      e.preventDefault();

      var $src = $(e.target),
          target = $src.attr('href'),
          $target = $(target);

      Slideout.toggle($src, $target);
    },

    toggle: function($src, $target) {
      var isHidden = $target.hasClass(Slideout.selectors.hide),
          txtBuffer;
      txtBuffer = $src.html();
      $src.html($src.data('toggleText'));
      $src.data('toggleText', txtBuffer);

      if (isHidden) {
        $src.removeClass('success').addClass('secondary second-clear');
      } else {
        $src.removeClass('secondary second-clear').addClass('success');
      }
      $target.toggleClass(Slideout.selectors.hide, !isHidden);

      // var c = {},
      //     isShown = false;




      // console.log($target.css('right'));

      // if ($target.css('right') && $target.css('right') < 0) {
      //   c.right = '0px';
      //   isShown = false;
      // } else {
      //   c.right = '-9900px'
      // };

      // $target.animate(c, 'fast', function(){

      //     console.log('done!');
      //     console.log(isShown);
      //     $target.css('position', isShown ? 'absolute' : 'relative');
      // });
    },

    open: function() {},
    close: function() {}

  };

  $('[data-toggle=slideout]').on('click', Slideout.click);
})();