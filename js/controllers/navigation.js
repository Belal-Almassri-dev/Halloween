$( document ).ready(function() {
	$("body").on("click",".btn.page-scroll",function(){
		console.log("I am working");
		$("html, body").animate({ scrollTop: $('#about').offset().top }, 1000);
	})
})
				
			