function isEmpty(string)
{
	/// <summary>Trims given string and determines whether it is empty.</summary>
	/// <param name="string">The string.</param>
	/// <returns type="Boolean">Returns true if string is empty, false otherwise.</returns>
	
	return string.trim() == "";
}

function areEquivalent(value1, value2)
{
	/// <summary>Determines whether two given values are strictly equivalent.</summary>
	/// <param name="value1">First value.</param>
	/// <param name="value2">Second value.</param>
	/// <returns type="Boolean">Returns true if values are equivalent, false otherwise.</returns>
	
	return value1 === value2;
}

function isChecked(inputSet)
{
	/// <summary>Determines whether at least one element in input set is checked.</summary>
	/// <param name="inputSet">The input set.</param>
	/// <returns type="Boolean">Returns true if at least one element is checked, false otherwise.</returns>
	
	var result = false;
	
	for(var i = 0; i < inputSet.length; i++)
		if(inputSet[i].checked == true)
		{
			result = true;
			break;
		}
	
	return result;
}

function isEmailValid(email)
{
	/// <summary>Determines whether given email address is valid.</summary>
	/// <param name="email">The email address.</param>
	/// <returns type="Boolean">Returns true if email is valid, false otherwise.</returns
	
	var emailRegularExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.(\w{2}|(com))$/;
	var result = true;
	
	if(emailRegularExpression.test(email) == false) result = false;
	
	return result;
}

function validatePhone(phone){

    phone = phone.replace(/[^0-9]/g, '');
    if(phone.length != 10) { 
       return false;
    } else {
      return true;
    } 
} 

function validatePostal(postal){
    var regEx = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;
    if(regEx.test(postal))
    {
        return true;
    }
    else
    {
        return false;
    }
    
}

function isRegistrationFormValid()
{
        /// <summary>Determines whether the input into the local Web form is valid.</summary>
        /// <returns type="Boolean">Returns true if input is valid, false otherwise.</returns>

        var errors = new Array();
        var errorMessage = "Please correctly provide the following information.\n";

        var forename=document.getElementById("forename");
        var surname=document.getElementById("surname");
        var postal=document.getElementById("postalcode");
        var city=document.getElementById("city");
        var phone=document.getElementById("phonenumber");
        var email=document.getElementById("email");
        
        if(isEmailValid(email.value) == false) errors.push("email");
        if(isEmpty(forename.value) == true) errors.push("forename");
         if(isEmpty(surname.value) == true) errors.push("surname");
          if(isEmpty(postal.value) == true || validatePostal(postal.value) == false) errors.push("postal");
           if(isEmpty(city.value) == true) errors.push("city");
          if(isEmpty(phone.value) == true || validatePhone(phone.value) == false) errors.push("phone");
       

        if(errors.length != 0)
        {
                for(var i = 0; i < errors.length; i++) errorMessage += "\n - " + errors[i];
                alert(errorMessage);
                return false;
        }
        else return true;
}