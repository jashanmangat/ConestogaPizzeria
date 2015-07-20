/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function isFormValid(){
    alert("dsad");
    var errorMessage="The following field needs to be corrected";
var forename=document.getElementById("forename");
var surname=document.getElementById("surname");
var postal=document.getElementById("postalcode");
var city=document.getElementById("city");
var phone=document.getElementById("phonenumber");
var email=document.getElementById("email");
    

if(forename.value == ""){
		alert()
}


if(surname.value == ""){
		if(errorList == errorMessage){
		surname.focus();
		}
		errorList+="\n- Surname";
		isValid=false;
}



var postalExpr=/([ABCEGHJKLMNPRSTVWXYZ]\d){3}/i;
if(postal.value==""){
    if(errorList == errorMessage){
    postal.focus();
    }
    errorList+="\n- Missing Postal Code";
    isValid=false;
}
else if(!postalExpr.test(postal.value.toUpperCase())){
    if(errorList == errorMessage){
            postal.focus();
            }
            errorList+="\n- Invalid Postal code";
    isValid=false;
}
else{
postal.value=postal.toUpperCase();
if(postal.value.charAt!=''){
postal.value=postal.value.substring(0,3)+''+
postal.value.substring(3);
      }
 }



if(!city.value || city.value == ""){
		if(errorList == errorMessage){
		city.focus();
		}
		errorList+="\n- City";
		isValid=false;
}



var phoneExpr=/^\d{3}\-?\d{3}\-?\d{4}$/;
if(!phone.value||phone.value==""){
if(errorList == errorMessage){
		phone.focus();
		}
		errorList+="\n- Missing telephone number";
		isValid=false;

}
else if(!phoneExpr.test(phone.value)){
if(errorList == errorMessage){
		phone.focus();
		}
		errorList+="\n- Invalid telephone";
		isValid=false;
}
else{
if(phone.value.charAt(3)!='-'){
var phoneString='-'+phone.value.substring(6);
phone.value=phone.value.substring(0,6)+phoneString;
phone.value=phone.value.substring(0,3)+'-'+phone.value.substring(3);
}
}

var emailExpr=
/^((([A-Z]+[0-9]*)((\.?|\_?|\-?){0,1}[A-Z|0-9]+)?)\@([A-Z]+[A-Z|0-9]*\.[[A-Z|0-9]+(\.[A-Z|0-9]+)?))$/i;

if(!email.value||email.value==""){
if(errorList == errorMessage){
		email.focus();
		}
		errorList+="\n- Missing Email";
		isValid=false;

}
else if(!emailExpr.test(email.value)){
if(errorList == errorMessage){
		email.focus();
		}
		errorList+="\n- Invalid Email";
		isValid=false;
}
}
//function onSubmit() {
//alert("Your order has been submitted");

