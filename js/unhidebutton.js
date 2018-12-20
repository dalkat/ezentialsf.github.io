/** order form hide/unhide test **/


function myFunction() {
  var x = document.getElementById("myOrderform");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}