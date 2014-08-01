		$(document).ready(function() {
		
		var wordOne
		var wordTwo
		var wordThree
		var wordFour
		var wordFive
		
				$('#contact_name').on('input', function() {
					var input=$(this);
					wordOne = document.getElementsByTagName("input")[0].value;
					var is_name=input.val();
					if(is_name){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}
				});
				
				$('#contact_email').on('input', function() {
					var input=$(this);
					wordTwo = document.getElementsByTagName("input")[1].value;
					var is_email=input.val();
					if(is_email){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}
				});
				
				$('#contact_website').on('input', function() {
					var input=$(this);
					wordThree = document.getElementsByTagName("input")[2].value;
					var is_url=input.val();
					if(is_url){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}
				});
				
				$('#contact_message').on('input', function() {
					var input=$(this);
					wordFour = document.getElementsByTagName("input")[3].value;
					var message=input.val();
					if(message){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}	
				});
				
				$('#contact_word').on('input', function() {
					var input=$(this);
					wordFive = document.getElementsByTagName("input")[4].value;
					var word=input.val();
					if(word){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}	
				});
		
			$("#contact_submit button").click(function(event){
				var form_data=$("#contact").serializeArray();
				var error_free=true;
				for (var input in form_data){
					var element=$("#contact_"+form_data[input]['name']);
					var valid=element.hasClass("valid");
					var error_element=$("span", element.parent());
					if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
					else{error_element.removeClass("error_show").addClass("error");}
				}
				if (!error_free){
					event.preventDefault(); 
				}
				else{
					alert(wordOne + " and " + wordTwo + " went to " + wordThree + " to " + wordFour + " and " + wordFive + ".");
				}
			});
			
			
			
		});