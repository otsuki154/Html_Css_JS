var i = 0;
function count() {
  console.log(i++);
  setTimeout(function(){
    count();
  }, 1000);
}
count();