$(window).stellar({
	responsive: true,  
	positionProperty: 'transform',
	hideDistantElements: false
});

var fadeStart=115 // 100px scroll or less will equiv to 1 opacity
,fadeUntil=1000 // 200px scroll or more will equiv to 0 opacity
,fading = $('.images img');

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=1;

    // console.log(offset)
    if( offset<=fadeStart ){
        opacity=0;
    }else if( offset<=fadeUntil ){
       	opacity=0+offset/fadeUntil;
    }
    fading.css('opacity',opacity).html(opacity);
});

$(".play").click(function() {
  $( ".lightbox" ).addClass("animated zoomIn on");
});

$(".lightbox").click(function() {
  $( ".lightbox" ).removeClass("animated zoomIn on");
});