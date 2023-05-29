const SupportButton = document.getElementById("SupportContactButton");

SupportButton.addEventListener("click", (e) =>
{
  e.preventDefault();
  location.assign("support.html");
})

const DeveloperButton = document.getElementById("DevContactButton");

DeveloperButton.addEventListener("click", (e) =>
{
  e.preventDefault();
  location.assign("developer.html");
})
