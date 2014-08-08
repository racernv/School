function myFunction() {
		var nameFirst
		var nameLast
		var employeeAddress
		var phone
		var position
		
		nameFirst = document.getElementById("employee_first").value;
		nameLast = document.getElementById("employee_last").value;
		employeeAddress = document.getElementById("employee_address").value;
		phone = document.getElementById("employee_phone").value;
		position = document.getElementById("employee_position").value;



		$(".popup").append( "<p>" + nameFirst + " " + nameLast + "<br>" + employeeAddress + "<br>" + phone + "</p><p>Welcome " + nameFirst + ",<br>You have been selected for the position " + position + ".<br>Congratulations</p>" );
};