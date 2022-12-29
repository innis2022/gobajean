$(function() {
	
	//서브메뉴
	
	$(".images>li:nth-child(n+9)").hide();
	
	$(".plus>button").click(function() {
		number = $(".images>li:visible").length;
		number = Math.floor(number/4)*4;
		if(number>17)return;
		else{
			$(".images>li").hide();
			$(".images>li:nth-child(-n+"+(number+4)+")").show();
		}
		return false
	});
	
	// 체크박스
	
	$("input").click(function() {
		
		$(".images>li").hide();
		
		// input을 체크할면
		if(this.checked){
			for(i=0; i<=3; i++){
				if($(".sub_menu>ul>li:eq("+i+")>input").is(":checked")==true){
					input_value = $(".sub_menu>ul>li:eq("+i+")>input:checked").val();
					$(".images>li[title="+input_value+"]").show();
				}
			}
		}
		
		// input을 해제하려면
		else {
			empty_number = 0
			for( i=0; i<=3; i++) {
				input_value = $(".sub_menu>ul>li:eq("+i+")>input").val();
				if($(".sub_menu>ul>li:eq("+i+")>input").is(":checked")==false){
					$(".images>li[title="+input_value+"]").hide();
					empty_number++;
				}
				else {
					$(".images>li[title="+input_value+"]").show();
				}
				
			}
			if(empty_number == 4)
				$(".images>li:nth-child(-n+8)").show();
			
		}
		
		
	});
	
	
});	

