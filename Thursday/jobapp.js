function myFunction() {
		var nameFirst
		var nameLast
		var employeeAddress
		var phone
		var position
		
		nameFirst = $("#employee_first").val();
		nameLast = $("#employee_last").val();
		employeeAddress = $("#employee_address").val();
		phone = $("#employee_phone").val();
		position = $("#employee_position").val();


		$("#form").hide();
		$(".popup").html( "<p>" + nameFirst + " " + nameLast + "<br>" + employeeAddress + "<br>" + phone + "</p><p>Welcome " + nameFirst + ",<br>You have been selected for the position " + position + ".<br>Congratulations</p>" );
};