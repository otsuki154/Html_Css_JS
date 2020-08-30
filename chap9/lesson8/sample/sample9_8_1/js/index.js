$(function(){
	// 画像1枚毎のポップアップが出ます。オプション指定なし
	$("#section01 a").colorbox();

	// rel属性によるグループ機能が入り、矢印で同じグループの画像を切り替えることができます。
	// また、maxWidthを指定する事でウィンドウサイズに合わせてポップアップが開くようにしています。
	$("#section02 a").colorbox({
		maxWidth: "90%"
	});

	// 別のhtmlファイルをiframe内に表示します。こちらはinnerWidthとinnerHeightによるサイズ指定が必要となります。
	// また、fixed指定をする事で開いているポップアップがページスクロールの影響を受けないようになります。
	$("#section03 a").colorbox({
		fixed: true,
		iframe: true,
		innerWidth: 800,
		innerHeight: 600
	});
});