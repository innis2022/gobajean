$(function() {
	
	
	//메인슬라이드
	
	var ww = $(window).width();
	
	$("cover, .cover>div").css("width", ww+"px");
	$(".cover>div").not(":eq(0)").css("left", ww+"px");
	
	now=0;
	imgs =3;
	function slide() {
		$(".cover>div").not(":eq("+now+")").css("left", ww+"px");
		now = now ==imgs?0:now+=1;
		$(".cover>div").eq(now-1).animate({left:-ww+"px"},1000);
		$(".cover>div").eq(now).animate({left:"0px"},1000,function(){$(".cover>div").not(":eq("+now+")").css("left", ww+"px");});
		$(".bullet>li").removeClass("hover");
		$(".bullet>li").eq(now).addClass("hover");
	
	}
	
	clear = setInterval(slide, 3000);
	
	// 버튼, 블릿기호 클릭 시 자동 슬라이드 clear
	
	$(".prev, .next, .bullet>li").click(function(){
		clearInterval(clear);
	});
	
	// prev 버튼 클릿 슬라이드 3-2-1-0-3
	
	function slide_left() {
		var imgs = 0;
		$(".cover>div").not(":eq("+now+")").css("left", -ww+"px");
		now = now ==imgs?3:now-=1;
		if( now == 3) {
			$(".cover>div").eq(0).animate({left:ww+"px"},1000);
		}
		else {
			$(".cover>div").eq(now+1).animate({left:ww+"px"},1000);
		}
		
		$(".cover>div").eq(now).animate({left:"0px"},1000,function(){$(".cover>div").not(":eq("+now+")").css("left",-ww+"px");});
		$(".bullet>li").removeClass("hover");
		$(".bullet>li").eq(now).addClass("hover");
	}
	
	// 버튼 클릭 시 함수호출 
	
	$(".prev").click(function(){
		slide_left();
	});
	
	$(".next").click(function(){
		slide();
	});
	
	// 블릿기호
	
	$(".bullet>li").click(function(){
		var bulletNumber = $(this).index();
		if( now == bulletNumber ) return;
		else {
			$(".cover>div").not(":eq("+now+")").css("left", ww+"px");
			$(".cover>div").eq(now).animate({left:-ww+"px"},1000);
			$(".cover>div").eq(bulletNumber).animate({"left":"0px"},1000,function(){$(".cover>div").not(":eq("+bulletNumber+")").css("left",ww+"px");});
			
			$(".bullet>li").removeClass("hover");
			$(".bullet>li").eq(bulletNumber).addClass("hover");
			now = bulletNumber;
		}
	});
	
	
	
});	

