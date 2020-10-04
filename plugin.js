$(window).load(function() {
		 $(".loading,.loading .spinner").fadeOut(3000);
		});

$(document).ready (function() {
	// body...
	$('body').niceScroll();
	 var _globaloptions = {
    zindex: "1040"}

// top-btn
var scrollbutton=$('.top-btn');
// show and hide button
$(window).scroll(function () {
	if($(this).scrollTop()>= 700){ //this=> window
		scrollbutton.show();
	}
	else{
		scrollbutton.hide();
	}
});
// click to scrolltop
scrollbutton.click(function() {
 $('html,body').animate({
scrollTop:0
 },600
 )
});
// color Option
$('.glyphicon-asterisk').click(function() {
	$('.color-option').fadeToggle();
});
var color_list =$('.color-option ul li');
color_list
.eq(0).css('backgroundColor','#378dc0').end()
.eq(1).css('backgroundColor','#be5d6b').end();

color_list.click(function() {
$("link[href*='theme']").attr("href",$(this).attr("data-value"));
})
















});