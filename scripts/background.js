$(document).snowfall({image :"http://www.lilwaynehq.com/forums/images/smilies/drizzy-face.png", minSize: 15, maxSize:40, flakeCount : 100, maxSpeed : 10});
$(document).ready(function() {
	var drizzy = chrome.extension.getURL("assets/drizzy.jpg");
	$('img').each(function(index, image){
		$(image).attr('src', drizzy);
	});
});