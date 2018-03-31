// if(!/android|iphone|ios|ipad/g.test(navigator.userAgent.toLowerCase())){
// 	location = "http://ifgbim.hnagroup.com";
// }

var src = [
	'<script src="../script/lib/echarts.min.js"></script>',
	'<script src="../script/lib/jquery1.11.3.min.js"></script>',
	'<script src="../script/lib/underscore-min.js"></script>',
	'<script src="../script/lib/jquery-ui.min.js"></script>',
	'<script src="../script/lib/jquery.combo.select.js"></script>'
];
if (navigator.userAgent.match(/mobile/i)) {

	src.push('<link rel="stylesheet" href="../style/common.css">');
	src.push('<link rel="stylesheet" href="../style/index.css">');
} else {
	src.push('<link rel="stylesheet" href="../style/common_pc.css">');
	src.push('<link rel="stylesheet" href="../style/index_pc.css">');
}
document.write(src.join(''));