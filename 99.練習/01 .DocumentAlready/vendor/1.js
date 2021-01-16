// Cau truc chung nhu  de dam bao html load xong noi dung roi moi thuc hien
document.addEventListener("DOMContentLoaded",function(){
    //code o day
    var x1 = document.getElementById('btnId');
    console.log(x1);
    // Xu ly su kien click, goi den ham nam anonymous
    x1.onclick = function(){
        console.log('Ban vua click vao ' + x1);
        x1.classList.add("hidden");
    }
},false)