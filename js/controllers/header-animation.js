$( document ).ready(function() {
    var whichSpeed = 30,
		ghostSpeed = 30,
		screenWidth,
		screenHeight,
		
		headerDimentions = function() {
			screenWidth = $('header').width();
			screenHeight = $('header').height();
			console.log("screenWidth:" + screenWidth + " screenHeight: " + screenHeight);
		},
		getMeRandomNumber = function(minNum, maxNum) {
			var randomNum;
			randomNum = Math.floor(Math.random() * maxNum) + minNum ;
			return randomNum;
		},
		animateWitch = function() {
			$('.witch').css({"left":"-100px", "top" : getMeRandomNumber(1 , 75) + "%"})
			.animate({
				left:"+100%"
			}, 4000, function() {
				setTimeout(
				function() 
				
				{
					animateWitch();
				}, 5000);
			})
		},
		animateGhost = function() {
			$(".ghost").each(function(){
				
				$(this).animate({
					top: getMeRandomNumber(70 , -70)+"%",
					left: getMeRandomNumber(100 , -100)+"%"
				}, getMeRandomNumber(3000 , 5000), function() {
					setTimeout(
					function() 
					
					{
						animateGhost();
					}, getMeRandomNumber(5000 , 10000));
				})
				
			});
		}
	headerDimentions();
	
	// trigger page resize
	$( window ).resize(function() {headerDimentions()});	
	animateGhost();
	animateWitch();
	
});