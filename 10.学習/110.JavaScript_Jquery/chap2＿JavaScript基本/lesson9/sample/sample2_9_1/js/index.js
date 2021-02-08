// 消費税率を変数で定義
var tax = 1.08;
// 入力された数値を保存
var price = prompt("商品の総額を数値で入力してください");
// 入力された数値に消費税率を掛ける
var result = Math.round(price * tax);
// 計算結果を表示
alert("お買い上げの合計は、消費税込みで" + result + "円です");