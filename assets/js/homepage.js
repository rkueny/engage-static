(function ($) {
  "use strict"; // Start of use strict

  $(".video a.player").on("click", function () {
    $(this).hide();
    $(".video h2").hide();

    $("#video_homepage").html("");
    $("#video_homepage").show();
    $("#video_homepage")[0].play(); // [0] pour atteindre l'élément et non l'objet jQuery
  });
})(jQuery); // End of use strict
