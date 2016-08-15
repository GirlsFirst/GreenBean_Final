function validateForm() {
    var form = document.forms.myForm,
        x = form.uname.value,
        y = form.pass.value;

    if (x === null || x === "") {
        alert("UserName must be filled out");
        return false;
    }
    if (y === null || y === "") {
        alert("Password must be filled out");
        return false;
    }
}

function Show(){
	document.getElementById('info').style.display="block"; 
	//return false;
	var x = document.getElementById('new_user');
	var y = x.value;
	document.getElementById("userdisplay").innerHTML = y;
	document.getElementById('info2').style.display="block"; 
	return false;
}

/*function submitFunction() {
	var x=document.forms["myForm"]["username"].value;
	var y=document.forms["myForm"]["password"].value;
	if(x==null||x==""||y==null||y==""){
		alert("Please fill out all fields.");
		}
	else{
		<a href="greenbean_form.html">button</a>
		var user = document.getElementById("username");
		var pass = document.getElementById("password");
		
		var correct_user = "test";
		var correct_password = "123";
		
		if(user.value == correct_user){
			if(pass.value == correct_password){
				alert("You are logged in as " + user.value);
			}
			else{
				alert("Your password is incorrect");
			}
		}
		else{
			alert("That username does not exist");
		}
	}
}*/
	