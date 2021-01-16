document.addEventListener("DOMContentLoaded", function(){
    // truy xuat phan tu
    var btn = document.getElementById("nut1");
    var crd = document.getElementsByClassName("card");
    // console.log(btn);
    // console.log(crd[0]);
// dung ham anonymous de tiet kiem bo nho giup trang load nhanh hon
    btn.onclick = function(){
        // console.log("click duoc roi");
        // crd[0].classList.toggle("sangPhai");
        //dùng toggle với animation thì xử lý chỉ được 1 chiều
        crd[0].classList.toggle("sangPhaiByAnimation");
    }
},false)