$(function() {
	
	// 처움상태 만들기
	
	$(".community>li:nth-child(n+3)").hide();
	
	//메뉴 클릭시 해당하는 글 나오기
	
	$(".sub_menu>ul>li").click(function() {
		var valtitle = [ "FQA", "question", "free", "bast" ]
		var number = $(this).index();
		$(".community>li").hide();
		$(".community>li[title="+valtitle[number]+"]").show();
	});
	
	
	
	
	
	
	
	
	
	
	
	// $(".plus>button").click(function() {
		// number = $(".community>li:visible").length;
		// number = Math.floor(number/4)*4;
		// if(number>8)return;
		// else{
			// $(".community>li").hide();
			// $(".community>li:nth-child(-n+"+(number+4)+")").show();
		// }
		// return false
	// });
	
	// 체크박스
	
	$("input").click(function() {
		
		$(".community>li").hide();
		
		// input을 체크
		if(this.checked){
			for(i=0; i<=3; i++){
				if($(".sub_menu>ul>li:eq("+i+")>input").is(":checked")==true){
					input_value = $(".sub_menu>ul>li:eq("+i+")>input:checked").val();
					$(".community>li[title="+input_value+"]").show();
				}
			}
		}
		
		// input을 해제
		else {
			empty_number = 0
			for( i=0; i<=3; i++) {
				input_value = $(".sub_menu>ul>li:eq("+i+")>input").val();
				if($(".sub_menu>ul>li:eq("+i+")>input").is(":checked")==false){
					$(".community>li[title="+input_value+"]").hide();
					empty_number++;
				}
				else {
					$(".community>li[title="+input_value+"]").show();
				}
				
			}
			if(empty_number == 4)
				$(".community>li:nth-child(-n+2)").show();
			
		}
		
		
	});
	
	
});	

