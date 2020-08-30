var i = 0;
var countup = function() {
  console.log(i++);
}
var timer = setInterval(function(){
    countup();
    if (i > 5) {
        clearTimeout(timer);
}}, 1000);