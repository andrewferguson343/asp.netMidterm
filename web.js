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
  error.nodeValue = "";
  var firstName = document.getElementById("registerForm-FirstName").value;
  if (firstName === "") {
    var firstError = document.getElementById("registerForm-FirstName");
    firstError.style.border = "1px solid red";
    errorMessage = "First Name is missing.";
  }
  var LastName = document.getElementById("registerForm-LastName").value;
  if (LastName === "") {
    errorMessage = "Last Name is missing.";
    var lastError = document.getElementById("registerForm-LastName");
    lastError.style.border = "1px solid red";

  }
  var Address = document.getElementById("registerForm-AddressLine1").value;
  if (Address === "") {
    var addressError = document.getElementById("registerForm-AddressLine1");
    addressError.style.border = "1px solid red";
    errorMessage = "Address Line 1 is missing.";
  }
  var city = document.getElementById("registerForm-City").value;
  if (city === "") {
    var cityError = document.getElementById("registerForm-City");
    cityError.style.border = "1px solid red";
    errorMessage = "City is missing.";
  }
  var state = document.getElementById("registerForm-State").value;
  if (state === "") {
    var stateError = document.getElementById("registerForm-State");
    stateError.style.border = "1px solid red";
    errorMessage = "State is missing.";
  }

  var zip = document.getElementById("registerForm-Zip").value;
  if (zip === "") {
    errorMessage = "Zip is missing.";
    var zipError = document.getElementById("registerForm-Zip");
    zipError.style.border = "1px solid red";
  }  
  var errorContainer = document.getElementById("fail");
  errorContainer.style.display = "none";
  if (errorMessage.length > 0) {
    errorContainer.style.display = "block";
    error.textContent = errorMessage;
  }
  
}