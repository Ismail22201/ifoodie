const LoginForm = document.getElementById("LoginForm");
const LoginButton = document.getElementById("LoginButton");
const InvalidUsername = document.getElementById("InvalidUsername");
const InvalidPassword = document.getElementById("InvalidPassword");

LoginButton.addEventListener("click", (e) =>
  {
    e.preventDefault();
    const username = LoginForm.Username.value;
    const password = LoginForm.Password.value;

    InvalidUsername.style.opacity = 0;
    InvalidPassword.style.opacity = 0;

      if(username != adminData.Username)
      {
        InvalidUsername.style.opacity = 1;
        InvalidPassword.style.opacity = 1;
      }

      else if(password != adminData.Password)
        InvalidPassword.style.opacity = 1;

      if(username == adminData.Username && password == adminData.Password)
      {
        window.location.replace("../Home/Home.html");
      }
  })
