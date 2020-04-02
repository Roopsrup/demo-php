function register(){
	console.log("function calling")
	$.ajax({
		method: 'POST',
		url:'register.php',
		data: 'uname='+$("#username").val()+"&email="+$("#email").val()+"&password="+$("#password").val(),
		success:function(response){
			//alert(response);
		}    
	});
}			
