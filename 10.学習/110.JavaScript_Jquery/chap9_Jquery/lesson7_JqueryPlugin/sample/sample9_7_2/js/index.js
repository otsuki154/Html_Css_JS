$(function () {
  $("h1").textillate({
    loop: true,
    // フェードイン時のアニメーション
    in: {
      effect: "bounceIn",
      delay: 100,
      sequence: true,
    },
    // フェードアウト時のアニメーション
    out: {
      effect: "bounce",
      delay: 100,
      sequence: true,
    },
  });
});
