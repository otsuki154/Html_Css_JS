$(document).ready(function () {
  $(".khoianh").append('<img src="" class="tmp" alt="" srcset="" />');
  $(".toankhoi").append('<div class="modal"></div>');

  var count = 1;

  // xu ly cho event click button trai phai
  $(".phai , .trai").click(function (e) {
    e.preventDefault();

    // lấy số lượng ảnh trong slide, trừ đi 1 vì có add thêm div tmp
    var picCnt = $(this).parent().prev().children(".khoianh img").length - 1;
    // lay value of attribute cua phan tu anh thu count
    var x = $(".khoianh img:nth-child(" + count + ")").attr("src");
    // set gia tri lay duoc vao tag img tmp, phải lần mò theo đúng dấu vết để hiển xử lý đungs đối tượng
    $(this).parent().prev().children(".tmp").attr("src", x);

    if (count === picCnt) {
      count = 0;
    }
    count++;
  });

  // xu ly cho event click quickview
  $(".quickview").click(function (e) {
    e.preventDefault();

    $(".detailgoods, i.fa.fa-window-close, .modal").addClass("display");
    // $("").addClass("display");
  });
  // xu ly cho event close
  $("i.fa.fa-window-close, .modal").click(function (e) {
    e.preventDefault();
    closeModal();
  });

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      // escape key maps to keycode `27`
      // <DO YOUR WORK HERE>
      closeModal();
    }
  });

  function closeModal() {
    $(".detailgoods, i.fa.fa-window-close, .modal").removeClass("display");
  }
});
