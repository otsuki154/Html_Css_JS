//足していく整数を設定
var i = 1;
//足し算をした結果を設定
var result = 101;
while (result <= 100) {
	result += i;
	++i;
}
if (result > 100) {
	console.log("最後に足した整数は" + (i - 1) + "です。" );
}