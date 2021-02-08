$(function(){
	$.ajax({
	  url: "news.json",			// 取得対象となるjsonファイルのパス
	  dataType: "json",			// json形式でデータを取得
	})
	// データ取得処理成功時の処理
	// 引数に取得したデータがdataに格納されている
	.done(function(data){
		// データ分だけ処理を行う
		$.each(data.news, function(key, value) {
			// ニュースエリアにjsonから取得した日付(date)と本文(text)をhtmlタグとして出力
			$("#section01 .news-list").append('<li><dl><dt>' + value.date + '</dt><dd>' + value.text + '</dd></dl></li>');
		});
	});
});