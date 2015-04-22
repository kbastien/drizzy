var giphy = $.get("https://api.giphy.com/v1/gifs/search?q=drake&api_key=dc6zaTOxFJmzC&limit=70");
giphy.done(function(data) { 
	var rando = Math.floor((Math.random() * 49) + 1);
	$(document).ready(function(){
	  	var drizzy = data.data[rando].images.original.url;
		$('img').each(function(index, image){
			$(image).attr('src', drizzy);
		});
	});
	$(document).ready(function(){
		$(document).snowfall({image :"http://www.lilwaynehq.com/forums/images/smilies/drizzy-face.png", minSize: 15, maxSize:40, flakeCount : 100, maxSpeed : 10});
	});
}); 
