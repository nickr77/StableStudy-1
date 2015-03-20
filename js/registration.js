function registrationForm(form) {

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(form.email.value))
    {
	alert("Please enter a valid email address.");
	return false;
    }

    re = /^\w+$/;
    if(!re.test(form.username.value))
    {
	alert("Username must contain only alphanumeric characters and underscores.");
	return false;
    }

    if(form.password.value == form.verifyPassword.value)
    {
	re = /[0-9]/;
	if(!re.test(form.password.value))
	{
	    alert("Password must contain at least one number.");
	    return false;
	}

	re = /[a-z]/;
	if(!re.test(form.password.value))
	{
	    alert("Password must contain at least one lowercase letter.");
	}

	re = /[A-Z]/;
	if(!re.test(form.password.value))
	{
	    alert("Password must contain at least one uppercase letter.");
	    return false;
	}

    }
    else
    {
	alert("Please verify that your passwords match.");
	return false;
    }

        var Request = new XMLHttpRequest();

	Request.open('POST', 'http://private-c92d2-stablestudy.apiary-mock.com/users');

	Request.setRequestHeader('Content-Type', 'application/json');	

	Request.onreadystatechange = function () {
	  if (this.readyState === 4) {
    		console.log('Status:', this.status);
    		console.log('Headers:', this.getAllResponseHeaders());
    		console.log('Body:', this.responseText);
		window.location.href = "registrationPage.html";
  	  }
	};

	var body = {
  	'fName': form.firstname.value,
  	'lName': form.lastname.value,
  	'school': form.school.value,
  	'username': form.username.value,
  	'email': form.email.value,
  	'password': form.password.value
	};

Request.send(JSON.stringify(body));

}


