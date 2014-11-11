
(function($){
console.clear();
  var mobileNavMenuHandler = function(e){
      $("#mobilemenu").toggleClass("active");
  };

  $("a.menu-toggle").click(mobileNavMenuHandler);


})(jQuery);
