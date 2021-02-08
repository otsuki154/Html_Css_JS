var button = document.getElementById("nice");
button.addEventListener("click", niceAction);
function niceAction () {
  var element = document.createElement("p");
  var text = document.createTextNode("いいね！");
  document.body.appendChild(element).appendChild(text);
}