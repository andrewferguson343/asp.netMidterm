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
  var firstError = document.getElementById("registerForm-FirstName");

  if (firstName === "") {
    firstError.style.border = "1px solid red";
    errorMessage = "First Name is missing.";
  }
  else {
    firstError.style.border = "";
  }

  var LastName = document.getElementById("registerForm-LastName").value;
  var lastError = document.getElementById("registerForm-LastName");
  if (LastName === "") {
    errorMessage = "Last Name is missing.";
    lastError.style.border = "1px solid red";

  }
  else {
    lastError.style.border = "";
  }

  var Address = document.getElementById("registerForm-AddressLine1").value;
  var addressError = document.getElementById("registerForm-AddressLine1");

  if (Address === "") {
    addressError.style.border = "1px solid red";
    errorMessage = "Address Line 1 is missing.";
  }
  else {
    addressError.style.border = "";

  }
  var city = document.getElementById("registerForm-City").value;
  var cityError = document.getElementById("registerForm-City");
  if (city === "") {
    cityError.style.border = "1px solid red";
    errorMessage = "City is missing.";
  }
  else {
    cityError.style.border = "";
  }
  var state = document.getElementById("registerForm-State").value;
  var stateError = document.getElementById("registerForm-State");
  if (state === "") {
    stateError.style.border = "1px solid red";
    errorMessage = "State is missing.";
  }
  else {
    stateError.style.border = "";
  }

  var zip = document.getElementById("registerForm-Zip").value;
  var zipError = document.getElementById("registerForm-Zip");

  if (zip === "") {
    errorMessage = "Zip is missing.";
    zipError.style.border = "1px solid red";
  }
  else {
    zipError.style.border = "";
  }
  var errorContainer = document.getElementById("fail");
  errorContainer.style.display = "none";
  if (errorMessage.length > 0) {
    errorContainer.style.display = "block";
    error.textContent = errorMessage;
  }
  
}