$(document).ready(function() {
	
	// var ww = $(window).width();
	
	// // 핸드폰에서 에러가 날때
    // if(ww<=1400){
    //     ww=1400;
    // }
    // else{
    //     ww=$(window).width();
    // }
	
	
	//메뉴
	$(".main> li> a").on("mouseenter click", function(){
        $(".sub,.sub_bg").stop().slideDown();
    });
    $("header .main").mouseleave(function(){
        $(".sub,.sub_bg").stop().slideUp();
    });
    $(".main .last").blur(function(){
        $(".sub,.sub_bg").stop().slideUp();
    });


});	

