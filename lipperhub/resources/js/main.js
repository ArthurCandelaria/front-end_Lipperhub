var offsetTop = $('#navega').offset().top;
var $navegaTop = $('#navega');

$(document).on('scroll', function () {
    if (offsetTop <= $(window).scrollTop()) {
        $navegaTop.addClass('fixed-top');
    } else {
        $navegaTop.removeClass('fixed-top');
    }
});


$("nav a").click(function(event){
    event.preventDefault();

    var id = $(this).attr("href");

    targtOffset = $(id).offset().top;

    $("html, body").animate({
        scrollTop: targtOffset
    }, 500);

});


(function(){
	var $target = $(".anime"),
			animationClass = "anime-start",
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

    animeScroll();
    
})();

$(".navigation li").click(function(){
	$("#bt-menu").click();
});