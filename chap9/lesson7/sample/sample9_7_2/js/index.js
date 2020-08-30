$(function(){
	$("h1").textillate({
	  loop: true,
	  // フェードイン時のアニメーション
	  in: {
	    effect: 'fadeInDown',
	    delay: 50,
	    shuffle: true
	  },
	  // フェードアウト時のアニメーション
	  out: {
	    effect: 'flash',
	    delay: 50
	  }
	});
})