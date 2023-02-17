(function ($) {
  "use strict"; // Start of use strict

  // Menu de contact
  $("#contactNav")
    .mouseover(function () {
      $(".menu-contact").show();
    })
    .mouseout(function () {
      $(".menu-contact").hide();
    });

  // Menu principal
  $("#navbarNav2")
    .mouseover(function () {
      $(".menu-submenu").show();
    })
    .mouseout(function () {
      $(".menu-submenu").hide();
    });

  $("#navbarNav2 ul li a").mouseover(function () {
    const target = $(this).data("target");

    $("#navbarNav2 .content").hide();
    $("#navbarNav2 .content." + target).show();
  });

  $("#navbarNav2 .content")
    .mouseover(function () {
      const target = $(this).data("target");

      $("#navbarNav2 ul li a." + target).addClass("active");
    })
    .mouseout(function () {
      const target = $(this).data("target");

      $("#navbarNav2 ul li a." + target).removeClass("active");
    });
})(jQuery); // End of use strict
