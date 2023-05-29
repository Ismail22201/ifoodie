$(function()
{
  $('#tabs').tabs();
});

function fillAdminData(){
 document.getElementById('Username').value = adminData.Username;
 document.getElementById('Password').value = adminData.Password;
 document.getElementById('Email').value = adminData.Email;
 document.getElementById('Number').value = adminData.Number;
 document.getElementById('Address').value = adminData.Address;

 if(adminData.CardType == 'VISA')
  document.getElementById('VISA').checked='checked';
 if(adminData.CardType == 'MasterCard')
  document.getElementById('MasterCard').checked='checked';

 document.getElementById('CardNumber').value = adminData.CardNumber;
 document.getElementById('Month').value = adminData.Month;
 document.getElementById('Year').value = adminData.Year;
 document.getElementById('CardSecurityNum').value = adminData.CardSecurityNum;
}

var EditButton1 = document.getElementById('EditButton1');
EditButton1.addEventListener('click', function(){
  document.getElementById('Username').disabled = false;
  document.getElementById('Password').disabled = false;
  document.getElementById('Email').disabled = false;
  document.getElementById('Number').disabled = false;
  document.getElementById('Address').disabled = false;
});

var SaveButton1 = document.getElementById('SaveButton1');
SaveButton1.addEventListener('click', function(){
  document.getElementById('Username').disabled = true;
  document.getElementById('Password').disabled = true;
  document.getElementById('Email').disabled = true;
  document.getElementById('Number').disabled = true;
  document.getElementById('Address').disabled = true;
});

$('#CardNumber').keyup(function() {
  var foo = $(this).val().split("-").join(""); // remove hyphens
  if (foo.length == 16) {
    foo = foo.match(new RegExp('.{1,4}', 'g')).join("-");
  }
  $(this).val(foo);
});

var EditButton2 = document.getElementById('EditButton2');
EditButton2.addEventListener('click', function(){
  document.getElementById('VISA').disabled = false;
  document.getElementById('MasterCard').disabled = false;
  document.getElementById('CardNumber').disabled = false;
  document.getElementById('Month').disabled = false;
  document.getElementById('Year').disabled = false;
  document.getElementById('CardSecurityNum').disabled = false;
});

var SaveButton2 = document.getElementById('SaveButton2');
SaveButton2.addEventListener('click', function(){
  document.getElementById('VISA').disabled = true;
  document.getElementById('MasterCard').disabled = true;
  document.getElementById('CardNumber').disabled = true;
  document.getElementById('Month').disabled = true;
  document.getElementById('Year').disabled = true;
  document.getElementById('CardSecurityNum').disabled = true;
});
