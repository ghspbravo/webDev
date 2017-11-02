console.log('О, привет');

$(document).ready(function(){
	$('body').scrollspy({
		target: '.sidebar',
		offset: 200
	});
	$("#sidebar").affix({
		offset: {
			top: 250
		}
	});

	$(document).scroll(function() {
		var docheight = $('section').height() , delta = $('body').height()-docheight, winheight = $(window).height();
		var wintop = $(window).scrollTop() - delta;
		var totalScroll = (wintop/(docheight-winheight))*100;
		$(".progress-bar").css("width",totalScroll+"%");
	});
});