const SignUpForm = document.getElementById("SignUpForm");
const SignUpButton = document.getElementById("SignUpButton");
const TakenUsername = document.getElementById("TakenUsername");
const TakenPassword = document.getElementById("TakenPassword");
const DiffersPassword = document.getElementById("DiffersPassword");
const BlankFields = document.getElementById("BlankFields");

SignUpButton.addEventListener("click", (e) =>
  {
    e.preventDefault();
    const username = SignUpForm.Username.value;
    const password = SignUpForm.Password.value;
    const retypePassword = SignUpForm.RetypePassword.value;

    TakenUsername.style.opacity = 0;
    TakenPassword.style.opacity = 0;
    DiffersPassword.style.opacity = 0;
    BlankFields.style.opacity = 0;

    if(username == adminData.Username)
      TakenUsername.style.opacity = 1;

    if(password == adminData.Password)
      TakenPassword.style.opacity = 1;

    if(retypePassword != password)
      DiffersPassword.style.opacity = 1;

    if(username == "" || password == "" || retypePassword == "")
      BlankFields.style.opacity = 1;

    if(username != adminData.Username &&
       password != adminData.Password &&
       retypePassword == password &&
       username != "" &&
       password != "" &&
       retypePassword != "")
    {
      window.location.replace("../Home/Home.html");
    }
  })
