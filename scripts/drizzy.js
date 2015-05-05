var giphy = $.get("https://api.giphy.com/v1/gifs/search?q=drake&api_key=dc6zaTOxFJmzC&limit=70");
giphy.done(
	function(data) { 
		var imgCount = document.images.length;
		console.log("Number of images: " + imgCount);
		$(document).ready(function(){
			for (var i = 0; i < imgCount ; i++) {	
				var rando = Math.floor((Math.random() * 49) + 1);
				var drizzy = data.data[rando].images.original.url;
				document.images[i].src = drizzy;
			};
		});
		$(document).ready(function(){
			$(document).snowfall({image :"http://i.imgur.com/YrMrnjp.png", minSize: 15, maxSize:40, flakeCount : 100, maxSpeed : 10});
			setTimeout(function(){
			  $(document).snowfall('clear');
			}, 10000);
		});
	}); 
