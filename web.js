
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