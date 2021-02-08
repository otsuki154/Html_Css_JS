// ゴールまでのマス目数を設定
var goal = 50;
// 現在進んでいるマス数
var progress = 0;
// ゴールするまで実行
while(goal > progress) {    
    // サイコロの目を1〜6の範囲でランダムに決める
    var result = Math.floor(Math.random() * 6) + 1;
    console.log("サイコロの目は" + result + "です。" + result + "マス進みます");
    // マスを進める
    progress += result;
    // 進むマスに止まるかどうか判定するためのランダムな値を出す
    var rand = Math.floor(Math.random() * 4);
    if(rand == 0) {
        // 1~6の間のランダムな数だけ進ませる
        result = Math.floor(Math.random() * 6) + 1;
        // マスを進ませる加算処理
        progress += result;
        console.log(result + "進むマスに止まった！さらに" + result + "マス進む！");
    }
    console.log("現在" + progress + "マスまで進んでいます。あと" + (goal - progress) + "マスでゴールです");
}
// ゴールマスまで進んだら終了
console.log("ゴールしました！");