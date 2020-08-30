// 行き先の駅に停まる電車の種類を表示する処理
function displayTrainType() {
   var station = inputStation();
   var type = getTrainType(station);
   // 入力された値が選択肢の範囲内なら正しいメッセージを出力
   if(station >= 1 && station <= 3) {
       alert("その駅には" + type + "の電車が停まります");
   }
   else {
       // 選択肢以外のものを入力した場合は再度入力処理の関数を実行
       displayTrainType();
   }
}

// 駅名を入力する処理
function inputStation() {
   var station = prompt("1.A駅 2.B駅 3.C駅\n行き先の駅を1, 2, 3から選んでください");
   station = Number(station);
   return station;
}

// その駅に停まる電車の種類を取得する処理
function getTrainType(station) {
   var type;
   switch(station) {
       case 1:
           type = "快速";
           break;
       case 2:
           type = "快速と急行";
           break;
       case 3:
           type = "特急";
           break;
       default:
           alert("駅が正しく選択されませんでした。もう一度入力してください。");
           break;
   }
   return type;
}

// 呼び出し元　処理を実行する
displayTrainType();