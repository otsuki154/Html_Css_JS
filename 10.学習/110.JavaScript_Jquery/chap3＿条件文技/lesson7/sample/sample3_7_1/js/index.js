// station変数に入力結果を格納
var station = prompt("1.A駅 2.B駅 3.C駅\n行き先の駅を1, 2, 3から選んでください");
// promptから得た値は文字列となるので、後の処理のために数値に変換しておく
station = Number(station);
// その駅に停まる電車の種類を格納する変数
var type;
switch (station) {
	case 1:
	   type ="快速";
	   break;
	case 2:
	   type ="快速と急行";
	   break;
	case 3:
	   type ="特急";
	   break;
	default:
	   // 選択肢以外のものを入力した場合はエラー文を表示
	   alert("駅が正しく入力されていません。このページを再度読み込んでください。");
}
// 入力された値が正しければメッセージを出力
if (station >= 1 && station <= 3) {
	alert("その駅には" + type + "の電車が停まります"); 
}