const CancelButton = document.getElementById("BackButton");

CancelButton.addEventListener("click", (e) =>
{
  e.preventDefault();
  location.assign("contact.html");
})

const CompleteButton = document.getElementById("SendButton");

function sending()
{
    alert("Successfully sent!");
}

function checkError()
{
  var FirstName = $("#fname").val();
  var LastName = $("#lname").val();
  var Email = $("#email").val();
  var Inquiry = $("#subject").val();

  if (FirstName == '' || LastName == '' || Email == '' || Inquiry == '')
  {
    TheError.style.opacity = 1;
  }
  else
  {
    TheError.style.opacity = 0;
  }

}
