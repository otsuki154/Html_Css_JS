// 「nice」というidがついた要素をクリックした時のアクションを設定
document.getElementById("nice").addEventListener("click", function() {
	// pタグを準備
	var element = document.createElement("p");
	// 「いいね!」というテキストを準備
	var text = document.createTextNode("いいね！");
	// pタグの中に「いいね!」を格納して要素を追加
	document.body.appendChild(element).appendChild(text);
})