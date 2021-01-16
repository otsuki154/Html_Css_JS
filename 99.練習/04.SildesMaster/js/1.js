document.addEventListener("DOMContentLoaded", function () {
  //lấy vị trí slide hiện tại, tính slide tiếp theo
  var curLocation = document.querySelector(".nextIn");
  var slides = document.querySelectorAll(".slides ul li");
  var sildeLength = slides.length;
  var curIndex = 0;
  var nextIndex = 0;
  //set init class in current
  slides[curIndex].classList.add("display");

  var isMove = false;
  var animationEnd = 0;

  /**
   * @param isLeft:button trai true, button phai la false
   * @param classIn : classCss cho chieu vao
   * @param classOut : classCss cho chieu ra
   */
  function goNewSlide(isLeft, classIn, classOut) {
    //   ngăn tình trạng click liên tiếp khi animation chưa chuyển động xong
    if (isMove) {
      return;
    }

    isMove = true;
    //   tinh vi tri hien tai va vi tri tiep theo
    curIndex = nextIndex;
    if (isLeft) {
      nextIndex = nextIndex > 0 ? nextIndex - 1 : sildeLength - 1;
    } else {
      nextIndex = nextIndex < sildeLength - 1 ? nextIndex + 1 : 0;
    }
    // cờ trạng thái anmation chuyển đông
    animationEnd = 0;
    var endAnimationCurrent = function () {
      this.classList.remove("display");
      this.classList.remove(classOut);
      animationEnd++;
      //   animationEnd ==2 có nghĩa là cả 2 animation in và out đã kết thúc
      isMove = animationEnd == 2 ? false : isMove;
    };
    var endAnimationNext = function () {
      this.classList.remove(classIn);
      this.classList.add("display");
      animationEnd++;
      isMove = animationEnd == 2 ? false : isMove;
    };

    slides[curIndex].addEventListener(
      "webkitAnimationEnd",
      endAnimationCurrent
    );
    slides[nextIndex].addEventListener("webkitAnimationEnd", endAnimationNext);
    // add class out vào phần tử hiện tại
    slides[curIndex].classList.add(classOut);
    // add class in vào phần tử tiếp theo
    slides[nextIndex].classList.add(classIn);
  }
  //   ham xu ly su kien click button next
  var goNext = function () {
    var e = document.getElementById("selectId");
    var value = e.options[e.selectedIndex].value;
    var classIn = "";
    var classOut = "";
    switch (value) {
      case "1":
        classIn = "nextIn";
        classOut = "nextOut";
        break;
      case "2":
        classIn = "nextIn2";
        classOut = "nextOut2";
        break;
      case "3":
        classIn = "nextIn3";
        classOut = "nextOut3";
        break;
      case "4":
        classIn = "nextIn4";
        classOut = "nextOut4";
        break;
      default:
        break;
    }
    goNewSlide(false, classIn, classOut);
  };
  //   hàm sử lý sự kiện click button previous
  var goPrev = function () {
    var e = document.getElementById("selectId");
    var value = e.options[e.selectedIndex].value;
    var classIn = "";
    var classOut = "";
    switch (value) {
      case "1":
        classIn = "prevIn";
        classOut = "prevOut";
        break;
      case "2":
        classIn = "prevIn2";
        classOut = "prevOut2";
        break;
      case "3":
        classIn = "prevIn3";
        classOut = "prevOut3";
        break;
      case "4":
        classIn = "prevIn4";
        classOut = "prevOut4";
        break;
      default:
        break;
    }
    goNewSlide(true, classIn, classOut);
  };

  //bắt sự kiện click rightbtn
  var rightbtn = document.querySelector(".rightbtn");
  rightbtn.addEventListener("click", goNext);
  //bắt sự kiện click left
  var leftbtn = document.querySelector(".leftbtn");
  leftbtn.addEventListener("click", goPrev);
});
