(function ($) {
  "use strict"; // Start of use strict

  $(".launch-video").on("click", function () {
    $(this).hide();

    $(".video-launched").show();
    $(".video-launched")[0].play(); // [0] pour atteindre l'élément et non l'objet jQuery
  });
})(jQuery); // End of use strict
