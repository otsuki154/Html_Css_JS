var height = 100;
var ticket = "premium";
if (height >= 100) {
	alert ("乗車可能");
} else if (ticket === "premium") {
	alert ("プレミアムシートに乗車可能");
} else if (height >= 90) {
	alert ("付き添いありで乗車可能");
} else {
	alert ("乗車不可");
}