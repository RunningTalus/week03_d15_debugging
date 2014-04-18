$('#bigbutton').on('click', function() {
	console.log('CLICKED?');
	$(this).toggleClass('active');
	var color = $(this).css('background-color');
	console.log($('.quote'));
	$('#mainquote').css('color', color);
});

//Changed the selector from #mybutton to #bigbutton

//assigned line 4 jQuery to var color
//changed #quote to #mainquote
