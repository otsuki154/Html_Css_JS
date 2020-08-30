var x = "これはグローバル変数です";
function isVariable() {
	var x = "これはローカル変数です";
	console.log(x);
}
console.log(x);
isVariable();