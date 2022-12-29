$(function() {
   
   
   $(".loginButton").click(function(){
      var input1 = $("form>p:nth-child(1)>input").val();
      var input2 = $("form>p:nth-child(2)>input").val();
      
      if ( input1 == 0 && input2 == 0) {
         alert("아이디와 비밀번호를 입력해주세요");
         $("form>p:nth-child(1)>input").focus();
         return false;
      }
      
      else if( input1 == 0 && input2 != 0 ) {
         alert("아이디를 입력해주세요");
         $("form>p:nth-child(1)>input").focus();
         return false;
      }
      else if( input1 != 0 && input2 == 0 ) {
         alert("비밀번호를 입력해주세요");
         $("form>p:nth-child(2)>input").focus();
         return false;
      }
      return true;
   });
   
   
   
});   