$(function(){
  var $t = $(".timeline");


  function unHide() {
    $t.find('.hid').first().removeClass('hid');
  };

  setInterval(unHide, 1000)


});