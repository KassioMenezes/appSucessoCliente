document.addEventListener("DOMContentLoaded", function () {
  var tempMessage = document.getElementById("temp-message");

  tempMessage.style.display = "block";

  setTimeout(function () {
    tempMessage.style.display = "none";
  }, 2000);
});
