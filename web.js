function initializeBookView() {
  var elements = document.querySelectorAll(".bookCover");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "";
    elements[i].style.display = "inline-block";
  }
}
function filterBooks() {
  var elements = document.querySelectorAll(".bookCover");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "";
  }

  var genre = "." + document.getElementById("genreFilter").value;
  var displayBooks = document.querySelectorAll(genre);

  for (i = 0; i < displayBooks.length; i++) {
    displayBooks[i].style.display = "inline-block";
  }
}
function validateRegistrationForm() {
  var errorMessage = "";
  var error = document.getElementById("errorMessage");
  error.appendChild(document.createTextNode(""));


  alert("validation hit");
  var firstName = document.getElementById("registerForm-FirstName").value;
  if (firstName === "") {
    errorMessage = "First Name is missing";
  }
  var LastName = document.getElementById("registerForm-LastName").value;
  if (LastName === "") {
    errorMessage = "last Name is missing";
  }
  var Address = document.getElementById("registerForm-AddressLine1").value;
  if (Address === "") {
    errorMessage = "Address Line 1 is missing";
  }
  var city = document.getElementById("registerForm-City").value;
  if (city === "") {
    errorMessage = "City is missing";
  }
  var state = document.getElementById("registerForm-State").value;
  if (state === "") {
    errorMessage = "state is missing";
  }

  var zip = document.getElementById("registerForm-Zip").value;
  if (zip === "") {
    errorMessage = "state is missing";
  }
  var errorContainer = document.getElementById("fail");
  
  errorContainer.style.display = "block";
  var text = document.createTextNode(errorMessage);
  error.replaceChild(text);
}