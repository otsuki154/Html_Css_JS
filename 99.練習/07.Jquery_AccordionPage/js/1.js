$(document).ready(function () {
  $(".khoinoidung").slideUp();
  $(".cachinh a").fancybox({
    padding: 10,

    openEffect: "elastic",
    openSpeed: 1000,

    closeEffect: "elastic",
    closeSpeed: 1000,

    closeClick: true,
    closeBtn: true,
    arrows: true,
    helpers: {
      thumbs: {
        width: 100,
        height: 100,
      },
    },
  });
  $(".tieude").click(function (e) {
    e.preventDefault();
    $(this).next(".khoinoidung").slideToggle("easeInOutExpo");
    $(this).children("i").toggleClass("rotate");
    $("html,body").animate(
      { scrollTop: $(this).offset().top },
      1000,
      "easeInOutExpo"
    );
    // $(".khoinoidung").slideToggle();
  });
});
