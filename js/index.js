$(document).ready(function() {

	//메인슬라이드

	const fade = setInterval( move, 2500 );
	let j = 0; //원형블릿
	let i = 4;//항목
	function move(){
		j++;
		if(j == 4) { j = 0;}
		$("#bottom div").eq(j).addClass("pick").siblings().removeClass("pick");
		i--;
		if(i==0){
			//console.log( i==0 );
			$("#cover>a").fadeIn();
			i = 4; 
		}else{
			$("#cover>a").eq(i).fadeOut();
		}		
	}
	
	
});	

