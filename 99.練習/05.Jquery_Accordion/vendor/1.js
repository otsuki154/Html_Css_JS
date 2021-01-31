$(document).ready(function () {
  // Xep cac khoi noi dung lai
  $("div.contents").slideUp();
  $(".oneblock h3").click(function (e) {
    e.preventDefault();
    // $("div.contents").slideUp();
    // $(".oneblock h3").removeClass("clickedCss");
    $(this).toggleClass("clickedCss");
    $(this).next("div.contents").slideToggle();
  });
});
