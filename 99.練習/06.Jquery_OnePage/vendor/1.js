$(document).ready(function () {
  $(".topMenu ul li:nth-child(1) a").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      { scrollTop: $(".imageConten1").offset().top },
      1000,
      "easeInOutExpo"
    );
  });
  $(".topMenu ul li:nth-child(2) a").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      { scrollTop: $(".imageConten2").offset().top },
      1000,
      "easeOutBounce"
    );
  });
  $(".topMenu ul li:nth-child(3) a").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      { scrollTop: $(".imageConten3").offset().top },
      1000,
      "easeOutBack"
    );
  });
  $(".topMenu ul li:nth-child(4) a").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      { scrollTop: $(".imageConten4").offset().top },
      1000,
      "easeOutElastic"
    );
  });
  $(".topMenu ul li:nth-child(5) a").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      { scrollTop: $(".imageConten5").offset().top },
      2000
    ),
      "easeInOutCubic";
  });
  $(".backToTop").click(function (e) {
    e.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 1000), "easeInOutBack";
  });
});
