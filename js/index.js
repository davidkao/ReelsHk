$(window).on("load", function() {
	
	$('.loading').delay(260).fadeTo(300,0,function() {$(this).hide();});
	
	//slick
	$(".regular").on('init reInit afterChange', function(event, slick){

		if ($(window).width() < 901)
		{
			$('.slick-slide').removeClass('slick-fool');
			$('.slick-center').prev().addClass('slick-fool');
		}
		else{
			$('.slick-slide').removeClass('slick-fool');
			$('.slick-center').prev().addClass('slick-fool');
			$('.slick-center').next().addClass('slick-fool');
		}

		$('.slick-slide').each(function(){

			if($(this).hasClass('slick-center')){
				var src = $(this).find('.imgadj img').attr("src").replace(".png",".gif");
				$(this).find('.imgadj img').prop("src",src);
				$(this).addClass('scale12');
			}
			else if($(this).hasClass('slick-fool')){
				var src = $(this).find('.imgadj img').attr("src").replace(".png",".gif");
				$(this).find('.imgadj img').prop("src",src);
				$(this).addClass('scale12');
			}
			else{
				var src2 = $(this).find('.imgadj img').attr("src").replace(".gif",".png");
				$(this).find('.imgadj img').prop("src",src2);
				$(this).removeClass('scale12');
			}

		});

	});

	$(".regular").slick({
		dots: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		centerMode: true,
		autoplay:true,
		//arrows: false,
		autoplaySpeed:2500,
		speed:300,
		respondTo : 'window',
		pauseOnFocus:false, 
		pauseOnHover:false,
		mobileFirst:true,
		//focusOnSelect: true,
		responsive:[
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2
				}
			}
			
		]
	});
	//slick

	/*flexslider
	$('.verticals').flexslider({
		animation: "slide",
		direction: "vertical",
		slideshow: true,            
		slideshowSpeed: 7500,
		animationSpeed:600,
		animationLoop: true,
		directionNav: false,
		pauseOnAction: false,
		smoothHeight: true, 
		pauseOnHover: true
	});
	*/

});