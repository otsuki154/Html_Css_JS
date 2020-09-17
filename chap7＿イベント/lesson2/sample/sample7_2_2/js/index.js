var button = document.getElementById("nice");
button.addEventListener("click", function() {
  var element = document.createElement("p");
  var text = document.createTextNode("いいね！");
  document.body.appendChild(element).appendChild(text);
})